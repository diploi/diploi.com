import { useEffect, useRef } from 'react'
import useMeasure from 'react-use-measure'
import {
  cubeMeth,
  drawCubeLeft,
  drawCubeRight,
  drawCubeTop,
  drawPackPlaneBottom,
  drawPackPlaneLeft,
} from './lib'

const START_OFFSET = 100
const DURATION_MS = 3000
const SIDE_LENGTH = 150

const easeOutCubic = (t: number): number => --t * t * t + 1

const cos30 = Math.cos(Math.PI / 6) // ≈ 0.866
const sin30 = Math.sin(Math.PI / 6) // = 0.5

const animateCubeAssembly = (
  ctx: CanvasRenderingContext2D,
  startX: number,
  startY: number,
) => {
  const duration = DURATION_MS
  let animationStartTime: number | null = null

  const topStartOffsetY = -START_OFFSET

  const leftOffsetDistance = START_OFFSET
  const leftStartOffset = {
    x: -leftOffsetDistance * cos30,
    y: leftOffsetDistance * sin30,
  }

  const rightOffsetDistance = START_OFFSET
  const rightStartOffset = {
    x: rightOffsetDistance * cos30,
    y: rightOffsetDistance * sin30,
  }

  const s = SIDE_LENGTH
  const sBackCube = s * 1.5
  const sShadowCube = s * 2
  const cube = cubeMeth({ s, startX, startY })
  const backCube = cubeMeth({ s: sBackCube, startX, startY })
  const shadowCube = cubeMeth({ s: sShadowCube, startX, startY })

  const cubeTopPath = drawCubeTop({ ...cube })
  const cubeLeftPath = drawCubeLeft({ ...cube })
  const cubeRightPath = drawCubeRight({ ...cube })
  const backPlaneBottomPath = drawPackPlaneBottom({ ...backCube })
  const backPlaneLeftPath = drawPackPlaneLeft({ ...backCube })
  const shadowPlaneBottomPath = drawPackPlaneLeft({ ...shadowCube })

  const bg = '#0c0b0c'

  const animate = (timestamp: number) => {
    if (!animationStartTime) {
      animationStartTime = timestamp
    }
    const elapsed = timestamp - animationStartTime
    const progress = Math.min(elapsed / duration, 1) // [0, 1]
    const easedProgress = easeOutCubic(progress)

    const currentTopOffsetY = topStartOffsetY * (1 - easedProgress)
    const currentLeftOffsetX = leftStartOffset.x * (1 - easedProgress)
    const currentLeftOffsetY = leftStartOffset.y * (1 - easedProgress)
    const currentRightOffsetX = rightStartOffset.x * (1 - easedProgress)
    const currentRightOffsetY = rightStartOffset.y * (1 - easedProgress)

    ctx.canvas.style.opacity = `${0 + progress}`

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.lineWidth = 1

    const backPlaneGradient = ctx.createLinearGradient(
      0,
      backCube.D.y,
      0,
      backCube.B.y,
    )
    backPlaneGradient.addColorStop(0, '#842EFF')
    backPlaneGradient.addColorStop(1, '#3D04BD')

    console.debug(cube)

    const leftPlaneGradient = ctx.createLinearGradient(
      0,
      backCube.C.y,
      0,
      backCube.F.y,
    )
    leftPlaneGradient.addColorStop(0, '#BA89FF')
    leftPlaneGradient.addColorStop(1, '#EBDCFF')

    const cubeTopGradient = ctx.createLinearGradient(0, cube.D.y, 0, cube.G.y)
    cubeTopGradient.addColorStop(0, '#FFCEE3')
    cubeTopGradient.addColorStop(1, '#FFACCF')

    const cubeLeftGradient = ctx.createLinearGradient(0, cube.G.y, 0, cube.F.y)
    cubeLeftGradient.addColorStop(0, '#F685B6')
    cubeLeftGradient.addColorStop(1, '#CA4A87')

    // Shadow face
    ctx.save()
    ctx.filter = 'blur(32px)'
    ctx.translate(0, currentTopOffsetY)
    ctx.beginPath()
    ctx.fillStyle = 'rgba(13, 13, 14, 0.7)'
    ctx.fill(shadowPlaneBottomPath)
    ctx.closePath()
    ctx.restore()

    // Back plane right
    ctx.save()
    ctx.translate(-currentLeftOffsetX, -currentLeftOffsetY)
    ctx.beginPath()
    ctx.fillStyle = backPlaneGradient
    ctx.fill(backPlaneBottomPath)
    ctx.closePath()
    ctx.restore()

    // Back plane left
    ctx.save()
    ctx.translate(0, -currentTopOffsetY)
    ctx.beginPath()
    ctx.fillStyle = leftPlaneGradient
    ctx.fill(backPlaneLeftPath)
    ctx.closePath()
    ctx.restore()

    // Top face
    ctx.save()
    ctx.translate(0, currentTopOffsetY)
    ctx.beginPath()
    ctx.fillStyle = cubeTopGradient
    ctx.fill(cubeTopPath)
    ctx.closePath()
    ctx.restore()

    // Left face
    ctx.save()
    ctx.translate(currentLeftOffsetX, currentLeftOffsetY)
    ctx.beginPath()
    ctx.fillStyle = cubeLeftGradient
    ctx.fill(cubeLeftPath)
    ctx.closePath()
    ctx.restore()

    // Right face
    ctx.save()
    ctx.translate(currentRightOffsetX, currentRightOffsetY)
    ctx.beginPath()
    ctx.fillStyle = bg
    ctx.fill(cubeRightPath)
    ctx.closePath()
    ctx.restore()

    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }

  requestAnimationFrame(animate)
}

export const CanvasComponent = ({
  width,
  height,
}: {
  width: number
  height: number
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    if (!ctx) return
    ctx.clearRect(0, 0, width, height)

    animateCubeAssembly(ctx, width / 2, height / 2)
  }, [canvasRef, width, height])

  return (
    <canvas
      ref={canvasRef}
      id="myCanvas"
      width={width}
      height={height}
      style={{
        position: 'absolute',
        left: 0,
      }}
    >
      You need a browser that supports HTML5!
    </canvas>
  )
}

export const Canvas = () => {
  const [containerRef, bounds] = useMeasure()

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: -200,
        zIndex: -1,
        transform: 'rotate(-30deg) translate(-100px, -100px)',
        color: 'transparent',
        aspectRatio: '1/1',
      }}
    >
      {bounds.width && bounds.height && (
        <CanvasComponent width={bounds.width} height={bounds.height} />
      )}
    </div>
  )
}
