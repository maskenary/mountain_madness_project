"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { GarageDoor } from "@/components/garage-door"
import { FlashlightOverlay } from "@/components/flashlight-overlay"
import { RpmGauge } from "@/components/rpm-gauge"
import { GearPanel } from "@/components/gear-panel"
import { NavHud } from "@/components/nav-hud"
import { DeadbugOverlay } from "@/components/deadbug-overlay"
import { EngineStartButton } from "@/components/engine-start-button"
import { FuelGauge } from "@/components/fuel-gauge"
import { ParkingLot } from "@/components/parking-lot"
import { ShakeWrapper } from "@/components/shake-wrapper"
import { useVroomEngine } from "@/hooks/use-vroom-engine"

const FUEL_SCROLL_DRAIN_DOWN_PER_PX = 0.00025
const FUEL_SCROLL_DRAIN_UP_PER_PX = 0.00025

const AD_IMAGE_LEFT = "/images/ad-genius.png"
const AD_IMAGE_RIGHT = "/images/ad-trolling.png"

function InlineAds({ swapOrder = false }: { swapOrder?: boolean }) {
  const [first, second] = swapOrder ? [AD_IMAGE_RIGHT, AD_IMAGE_LEFT] : [AD_IMAGE_LEFT, AD_IMAGE_RIGHT]
  return (
    <div className="road-trigger w-full flex gap-4 justify-center items-stretch my-9" aria-hidden="false">
      <figure className="flex-1 min-w-0 max-w-[50%] rounded-xl overflow-hidden" style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.45)" }}>
        <div className="w-full h-[320px] bg-muted/30 flex items-center justify-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={first} alt="" className="w-full h-full object-contain object-center" />
        </div>
      </figure>
      <figure className="flex-1 min-w-0 max-w-[50%] rounded-xl overflow-hidden" style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.45)" }}>
        <div className="w-full h-[320px] bg-muted/30 flex items-center justify-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={second} alt="" className="w-full h-full object-contain object-center" />
        </div>
      </figure>
    </div>
  )
}

export default function Page() {
  const needleRef = useRef<HTMLDivElement>(null)
  const [fuelLevel, setFuelLevel] = useState(0)
  const [engineStarted, setEngineStarted] = useState(false)
  const lastScrollY = useRef(0)
  const fuelRef = useRef(0)

  const {
    gear,
    setGear,
    movingLightOn,
    isParkingMode,
    parkingCarTop,
    parkingSuccess,
    activateParking,
  } = useVroomEngine(needleRef)

  const onEngineStart = useCallback((success: boolean) => {
    if (!success) return // 50% chance: engine doesn't start — fuel and gear stay as-is
    setEngineStarted(true)
    fuelRef.current = 1
    setFuelLevel(1)
  }, [])

  useEffect(() => {
    if (fuelLevel <= 0) setGear("N")
  }, [fuelLevel, setGear])

  const fuelEmpty = fuelLevel <= 0
  const displayGear = fuelEmpty ? "N" : gear
  const handleGearChange = fuelEmpty ? () => {} : setGear

  // 백업 비프음: 기어가 R에 있을 때만 재생
  const backupBeepsRef = useRef<HTMLAudioElement | null>(null)
  useEffect(() => {
    if (typeof window === "undefined") return
    backupBeepsRef.current = new Audio("/backup-beeps.mp3")
    return () => {
      backupBeepsRef.current?.pause()
      backupBeepsRef.current = null
    }
  }, [])
  useEffect(() => {
    const audio = backupBeepsRef.current
    if (!audio) return
    const shouldPlay = displayGear === "R"
    if (shouldPlay) {
      audio.loop = true
      audio.currentTime = 0
      audio.play().catch(() => {})
    } else {
      audio.pause()
      audio.currentTime = 0
    }
  }, [isParkingMode, displayGear, parkingSuccess])

  useEffect(() => {
    if (!engineStarted) return
    const handleScroll = () => {
      const current = window.scrollY ?? document.documentElement.scrollTop
      const delta = current - lastScrollY.current
      if (delta !== 0) {
        const rate = delta > 0 ? FUEL_SCROLL_DRAIN_DOWN_PER_PX : FUEL_SCROLL_DRAIN_UP_PER_PX
        fuelRef.current = Math.max(0, fuelRef.current - Math.abs(delta) * rate)
        const rounded = Math.round(fuelRef.current * 500) / 500
        setFuelLevel(rounded)
      }
      lastScrollY.current = current
    }
    lastScrollY.current = window.scrollY ?? document.documentElement.scrollTop
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [engineStarted])

  return (
    <>
      {/* Garage Door Landing */}
      <GarageDoor />

      {/* Flashlight Overlay */}
      <FlashlightOverlay />

      {/* Deadbug Overlay - 주차장에서는 벌레 안 나옴 */}
      <DeadbugOverlay isParkingMode={isParkingMode} />

      {/* HUD Elements - outside shake wrapper so they stay fixed */}
      <FuelGauge fuel={fuelLevel} started={engineStarted} />
      <EngineStartButton onEngineStart={onEngineStart} />
      <NavHud onReachEnd={activateParking} lightOn={movingLightOn} />
      <RpmGauge ref={needleRef} />
      <GearPanel gear={displayGear} onGearChange={handleGearChange} movingLightOn={movingLightOn} fuelLocked={fuelEmpty} />

      <ShakeWrapper>
        {/* Site Header */}
        <header
          className="py-6 px-6 border-b"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <h1 className="text-base font-sans font-semibold tracking-wide" style={{ color: "rgba(240,240,240,0.38)" }}>
            {"\u00A0"}
          </h1>
        </header>

        {/* Main Content - 항상 중앙 */}
        <main className="mx-auto px-6 py-12 pb-16" style={{ width: 800 }}>
          <article>
            <h2 className="text-4xl font-sans font-semibold leading-tight mb-3 text-balance" style={{ color: "rgba(248,248,248,0.92)" }}>
              L&apos;Étranger | The Stranger
            </h2>
            <p className="text-sm font-sans mb-10" style={{ color: "rgba(200,200,200,0.9)" }}>
              By Albert Camus
            </p>

            {/* 본문 양쪽 도로 실선: 본문 시작 ~ parking lot 끝까지 */}
            <div className="article-road-lines">
            <div className="font-serif text-[22px] leading-[1.9]" style={{ color: "rgba(220,220,220,0.92)" }}>
              <p className="mb-8">
                {"Aujourd\u2019hui, maman est morte. Ou peut-\u00EAtre hier, je ne sais pas. J\u2019ai re\u00E7u un t\u00E9l\u00E9gramme de l\u2019asile\u00A0: \u00AB\u00A0M\u00E8re d\u00E9c\u00E9d\u00E9e. Enterrement demain. Sentiments distingu\u00E9s.\u00A0\u00BB Cela ne veut rien dire. C\u2019\u00E9tait peut-\u00EAtre hier. L\u2019asile de vieillards est \u00E0 Marengo, \u00E0 quatre-vingts kilom\u00E8tres d\u2019Alger. Je prendrai l\u2019autobus \u00E0 deux heures et j\u2019arriverai dans l\u2019apr\u00E8s-midi. Ainsi, je pourrai veiller et je rentrerai demain soir. J\u2019ai demand\u00E9 deux jours de cong\u00E9 \u00E0 mon patron et il ne pouvait pas me les refuser avec une excuse pareille. Mais il n\u2019avait pas l\u2019air content. Je lui ai m\u00EAme dit\u00A0: \u00AB\u00A0Ce n\u2019est pas de ma faute.\u00A0\u00BB Il n\u2019a pas r\u00E9pondu. J\u2019ai pens\u00E9 alors que je n\u2019aurais pas d\u00FB lui dire cela. En somme, je n\u2019avais pas \u00E0 m\u2019excuser. C\u2019\u00E9tait plut\u00F4t \u00E0 lui de me pr\u00E9senter ses condol\u00E9ances. Mais il le fera sans doute apr\u00E8s-demain, quand il me verra en deuil. Pour le moment, c\u2019est un peu comme si maman n\u2019\u00E9tait pas morte. Apr\u00E8s l\u2019enterrement, au contraire, ce sera une affaire class\u00E9e et tout aura rev\u00EAtu une allure plus officielle. J\u2019ai pris l\u2019autobus \u00E0 deux heures. Il faisait tr\u00E8s chaud. J\u2019ai mang\u00E9 au restaurant, chez C\u00E9leste, comme d\u2019habitude. Ils avaient tous beaucoup de peine pour moi et C\u00E9leste m\u2019a dit\u00A0: \u00AB\u00A0On n\u2019a qu\u2019une m\u00E8re.\u00A0\u00BB Quand je suis parti, ils m\u2019ont accompagn\u00E9 \u00E0 la porte. J\u2019\u00E9tais un peu \u00E9tourdi parce qu\u2019il a fallu que je monte chez Emmanuel pour lui emprunter une cravate noire et un brassard. Il a perdu son oncle, il y a quelques mois. J\u2019ai couru pour ne pas manquer le d\u00E9part. Cette h\u00E2te, cette course, c\u2019est \u00E0 cause de tout cela sans doute, ajout\u00E9 aux cahots, \u00E0 l\u2019odeur d\u2019essence, \u00E0 la r\u00E9verb\u00E9ration de la route et du ciel, que je me suis assoupi. J\u2019ai dormi pendant presque tout le trajet. Et quand je me suis r\u00E9veill\u00E9, j\u2019\u00E9tais tass\u00E9 contre un militaire qui m\u2019a souri et qui m\u2019a demand\u00E9 si je venais de loin. J\u2019ai dit \u00AB\u00A0oui\u00A0\u00BB pour n\u2019avoir plus \u00E0 parler. L\u2019asile est \u00E0 deux kilom\u00E8tres du village. J\u2019ai fait le chemin \u00E0 pied. J\u2019ai voulu voir maman tout de suite. Mais le concierge m\u2019a dit qu\u2019il fallait que je rencontre le directeur. Comme il \u00E9tait occup\u00E9, j\u2019ai attendu un peu. Pendant tout ce temps, le concierge a parl\u00E9 et ensuite, j\u2019ai vu le directeur\u00A0: il m\u2019a re\u00E7u dans son bureau. C\u2019\u00E9tait un petit vieux, avec la L\u00E9gion d\u2019honneur. Il m\u2019a regard\u00E9 de ses yeux clairs. Puis il m\u2019a serr\u00E9 la main qu\u2019il a gard\u00E9e si longtemps que je ne savais trop comment la retirer. Il a consult\u00E9 un dossier et m\u2019a dit\u00A0: \u00AB\u00A0Mme Meursault est entr\u00E9e ici il y a trois ans. Vous \u00E9tiez son seul soutien.\u00A0\u00BB J\u2019ai cru qu\u2019il me reprochait quelque chose et j\u2019ai commenc\u00E9 \u00E0 lui expliquer. Mais il m\u2019a interrompu\u00A0: \u00AB\u00A0Vous n\u2019avez pas \u00E0 vous justifier, mon cher enfant. J\u2019ai lu le"}
              </p>

              {/* Inline ads - triggers road shake */}
              <InlineAds />

              <p className="mb-8">
                {"dossier de votre m\u00E8re. Vous ne pouviez subvenir \u00E0 ses besoins. Il lui fallait une garde. Vos salaires sont modestes. Et tout compte fait, elle \u00E9tait plus heureuse ici.\u00A0\u00BB J\u2019ai dit\u00A0: \u00AB\u00A0Oui, monsieur le Directeur.\u00A0\u00BB Il a ajout\u00E9\u00A0: \u00AB\u00A0Vous savez, elle avait des amis, des gens de son \u00E2ge. Elle pouvait partager avec eux des int\u00E9r\u00EAts qui sont d\u2019un autre temps. Vous \u00EAtes jeune et elle devait s\u2019ennuyer avec vous.\u00A0\u00BB C\u2019\u00E9tait vrai. Quand elle \u00E9tait \u00E0 la maison, maman passait son temps \u00E0 me suivre des yeux en silence. Dans les premiers jours o\u00F9 elle \u00E9tait \u00E0 l\u2019asile, elle pleurait souvent. Mais c\u2019\u00E9tait \u00E0 cause de l\u2019habitude. Au bout de quelques mois, elle aurait pleur\u00E9 si on l\u2019avait retir\u00E9e de l\u2019asile. Toujours \u00E0 cause de l\u2019habitude. C\u2019est un peu pour cela que dans la derni\u00E8re ann\u00E9e je n\u2019y suis presque plus all\u00E9. Et aussi parce que cela me prenait mon dimanche - sans compter l\u2019effort pour aller \u00E0 l\u2019autobus, prendre des tickets et faire deux heures de route. Le directeur m\u2019a encore parl\u00E9. Mais je ne l\u2019\u00E9coutais presque plus. Puis il m\u2019a dit\u00A0: \u00AB\u00A0Je suppose que vous voulez voir votre m\u00E8re.\u00A0\u00BB Je me suis lev\u00E9 sans rien dire et il m\u2019a pr\u00E9c\u00E9d\u00E9 vers la porte. Dans l\u2019escalier, il m\u2019a expliqu\u00E9\u00A0: \u00AB\u00A0Nous l\u2019avons transport\u00E9e dans notre petite morgue. Pour ne pas impressionner les autres. Chaque fois qu\u2019un pensionnaire meurt, les autres sont nerveux pendant deux ou trois jours. Et \u00E7a rend le service difficile.\u00A0\u00BB Nous avons travers\u00E9 une cour o\u00F9 il y avait beaucoup de vieillards, bavardant par petits groupes. Ils se taisaient quand nous passions. Et derri\u00E8re nous, les conversations reprenaient. On aurait dit d\u2019un jacassement assourdi de perruches. \u00C0 la porte d\u2019un petit b\u00E2timent, le directeur m\u2019a quitt\u00E9\u00A0: \u00AB\u00A0Je vous laisse, monsieur Meursault. Je suis \u00E0 votre disposition dans mon bureau. En principe, l\u2019enterrement est fix\u00E9 \u00E0 dix heures du matin. Nous avons pens\u00E9 que vous pourrez ainsi veiller la disparue. Un dernier mot\u00A0: votre m\u00E8re a, para\u00EEt-il, exprim\u00E9 souvent \u00E0 ses compagnons le d\u00E9sir d\u2019\u00EAtre enterr\u00E9e religieusement. J\u2019ai pris sur moi, de faire le n\u00E9cessaire. Mais je voulais vous en informer.\u00A0\u00BB Je l\u2019ai remerci\u00E9. Maman, sans \u00EAtre ath\u00E9e, n\u2019avait jamais pens\u00E9 de son vivant \u00E0 la religion. Je suis entr\u00E9. C\u2019\u00E9tait une salle tr\u00E8s claire, blanchie \u00E0 la chaux et recouverte d\u2019une verri\u00E8re. Elle \u00E9tait meubl\u00E9e de chaises et de chevalets en forme de X. Deux d\u2019entre eux, au centre, supportaient une bi\u00E8re recouverte de son couvercle. On voyait seulement des vis brillantes, \u00E0 peine enfonc\u00E9es, se d\u00E9tacher sur les planches pass\u00E9es au brou de noix. Pr\u00E8s de la bi\u00E8re, il y avait une infirmi\u00E8re arabe en sarrau blanc, un foulard de"}
              </p>

              {/* Second set of inline ads (순서 바꿔서 둘이 같은 자리에 안 나오게) */}
              <InlineAds swapOrder />

              <p className="mb-8">
                {"couleur vive sur la t\u00EAte. \u00C0 ce moment, le concierge est entr\u00E9 derri\u00E8re mon dos. Il avait d\u00FB courir. Il a b\u00E9gay\u00E9 un peu\u00A0: \u00AB\u00A0On l\u2019a couverte, mais je dois d\u00E9visser la bi\u00E8re pour que vous puissiez la voir.\u00A0\u00BB Il s\u2019approchait de la bi\u00E8re quand je l\u2019ai arr\u00EAt\u00E9. Il m\u2019a dit\u00A0: \u00AB\u00A0Vous ne voulez pas\u00A0?\u00A0\u00BB J\u2019ai r\u00E9pondu\u00A0: \u00AB\u00A0Non.\u00A0\u00BB Il s\u2019est interrompu et j\u2019\u00E9tais g\u00EAn\u00E9 parce que je sentais que je n\u2019aurais pas d\u00FB dire cela. Au bout d\u2019un moment, il m\u2019a regard\u00E9 et il m\u2019a demand\u00E9\u00A0: \u00AB\u00A0Pourquoi\u00A0?\u00A0\u00BB mais sans reproche, comme s\u2019il s\u2019informait. J\u2019ai dit\u00A0: \u00AB\u00A0Je ne sais pas.\u00A0\u00BB Alors tortillant sa moustache blanche, il a d\u00E9clar\u00E9 sans me regarder\u00A0: \u00AB\u00A0Je comprends.\u00A0\u00BB Il avait de beaux yeux, bleu clair, et un teint un peu rouge. Il m\u2019a donn\u00E9 une chaise et lui-m\u00EAme s\u2019est assis un peu en arri\u00E8re de moi. La garde s\u2019est lev\u00E9e et s\u2019est dirig\u00E9e vers la sortie. \u00C0 ce moment, le concierge m\u2019a dit\u00A0: \u00AB\u00A0C\u2019est un chancre qu\u2019elle a.\u00A0\u00BB Comme je ne comprenais pas, j\u2019ai regard\u00E9 l\u2019infirmi\u00E8re et j\u2019ai vu qu\u2019elle portait sous les yeux un bandeau qui faisait le tour de la t\u00EAte. \u00C0 la hauteur du nez, le bandeau \u00E9tait plat. On ne voyait que la blancheur du bandeau dans son visage. Quand elle est partie, le concierge a parl\u00E9\u00A0: \u00AB\u00A0Je vais vous laisser seul.\u00A0\u00BB Je ne sais pas quel geste j\u2019ai fait, mais il est rest\u00E9, debout derri\u00E8re moi. Cette pr\u00E9sence dans mon dos me g\u00EAnait. La pi\u00E8ce \u00E9tait pleine d\u2019une belle lumi\u00E8re de fin d\u2019apr\u00E8s-midi. Deux frelons bourdonnaient contre la verri\u00E8re. Et je sentais le sommeil me gagner. J\u2019ai dit au concierge, sans me retourner vers lui\u00A0: \u00AB\u00A0Il y a longtemps que vous \u00EAtes l\u00E0\u00A0?\u00A0\u00BB Imm\u00E9diatement il a r\u00E9pondu\u00A0: \u00AB\u00A0Cinq ans\u00A0\u00BB - comme s\u2019il avait attendu depuis toujours ma demande. Ensuite, il a beaucoup bavard\u00E9. On l\u2019aurait bien \u00E9tonn\u00E9 en lui disant qu\u2019il finirait concierge \u00E0 l\u2019asile de Marengo. Il avait soixante-quatre ans et il \u00E9tait Parisien. \u00C0 ce moment je l\u2019ai interrompu\u00A0: \u00AB\u00A0Ah, vous n\u2019\u00EAtes pas d\u2019ici\u00A0?\u00A0\u00BB Puis je me suis souvenu qu\u2019avant de me conduire chez le directeur, il m\u2019avait parl\u00E9 de maman. Il m\u2019avait dit qu\u2019il fallait l\u2019enterrer tr\u00E8s vite, parce que dans la plaine il faisait chaud, surtout dans ce pays. C\u2019est alors qu\u2019il m\u2019avait appris qu\u2019il avait v\u00E9cu \u00E0 Paris et qu\u2019il avait du mal \u00E0 l\u2019oublier. \u00C0 Paris, on reste avec le mort trois, quatre jours quelquefois. Ici on n\u2019a pas le temps, on ne s\u2019est pas fait \u00E0 l\u2019id\u00E9e que d\u00E9j\u00E0 il faut courir derri\u00E8re le corbillard. Sa femme lui avait dit alors\u00A0: \u00AB\u00A0Tais-toi, ce ne sont pas des choses \u00E0 raconter \u00E0 Monsieur.\u00A0\u00BB Le vieux avait rougi et s\u2019\u00E9tait excus\u00E9. J\u2019\u00E9tais intervenu pour dire\u00A0: \u00AB\u00A0Mais non. Mais non.\u00A0\u00BB Je trouvais ce qu\u2019il racontait juste et int\u00E9ressant. Dans la petite morgue, il m\u2019a appris qu\u2019il \u00E9tait entr\u00E9 \u00E0 l\u2019asile"}
              </p>
            </div>

            {/* Article end divider */}
            <hr className="mt-10 border-none h-0 text-center text-base tracking-[0.35em]" style={{ color: "rgba(255,255,255,0.7)" }} aria-hidden="true" />
            <div className="text-center text-base tracking-[0.35em] mt-2 mb-0" style={{ color: "rgba(255,255,255,0.7)" }}>
              {"\u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014 \u2014"}
            </div>

            {/* Parking lot minigame */}
            <ParkingLot
              carTop={parkingCarTop}
              success={parkingSuccess}
              visible={isParkingMode}
            />
            </div>
          </article>
        </main>

        {/* Footer */}
        <footer
          className="mt-12 py-4 px-4 text-center text-xs border-t"
          style={{
            borderColor: "rgba(51,51,51,0.5)",
            color: "rgba(160,160,160,0.4)",
          }}
        >
          <p>{"\u00A9 2025 Site Name. All rights reserved."}</p>
        </footer>
      </ShakeWrapper>
    </>
  )
}
