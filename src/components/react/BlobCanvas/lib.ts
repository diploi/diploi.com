import { createNoise2D } from 'simplex-noise'
import type { Point } from './types'

function getMaxDistance(points: Point[], cx: number, cy: number) {
  return Math.max(
    ...points.map((p) => {
      const dx = p.x - cx
      const dy = p.y - cy
      return Math.sqrt(dx * dx + dy * dy)
    }),
  )
}

// How 'fast' we move through noise space
const noiseScale = 10

type GenerateGradient = {
  ctx: CanvasRenderingContext2D
  minX: number
  maxX: number
  minY: number
  maxY: number
  flip?: boolean
}

const PURPLE = '#6650FA'
const MID = '#9750FA'
const PINK = '#FF45EC'

function generateGradient({ ...args }: GenerateGradient) {
  // if (args.flip) {
  //   const gV = args.ctx.createLinearGradient(0, args.minY, 0, args.maxY)
  //   gV.addColorStop(0, PURPLE)
  //   gV.addColorStop(0.5, MID)
  //   gV.addColorStop(1, PINK)
  //   return gV
  // }

  const gH = args.ctx.createLinearGradient(args.minX, 0, args.maxX, 0)

  gH.addColorStop(0, args.flip ? PINK : PURPLE)
  gH.addColorStop(0.5, MID)
  gH.addColorStop(1, args.flip ? PURPLE : PINK)

  return gH
}

// How large the final shape is
//
type GenerateBlobPoints = {
  cx: number
  cy: number
  pointCount: number
  baseRadius?: number
  radiusVariation?: number
}

// Generate points
export function generateBlobPoints({
  cx,
  cy,
  pointCount,
  baseRadius = 300,
  radiusVariation = 40,
}: GenerateBlobPoints) {
  const points = []

  // Evenly spaced angles around a circle [0..2π]
  for (let i = 0; i < pointCount; i++) {
    const angle = Math.PI * 2 * (i / pointCount)

    // We'll feed angle into the noise function in a 2D way.
    // Trick: noise2D(cos(angle)*scale, sin(angle)*scale)
    const nx = Math.cos(angle) * noiseScale
    const ny = Math.sin(angle) * noiseScale

    // noise2D returns [-1, 1]
    const noise2D = createNoise2D()
    const noiseVal = noise2D(nx, ny)

    // Map the noise value from [-1, 1] to a change in radius
    const radiusOffset = noiseVal * radiusVariation

    // Final radius
    const r = baseRadius + radiusOffset

    // Convert polar -> Cartesian
    const x = cx + r * Math.cos(angle)
    const y = cy + r * Math.sin(angle)

    points.push({ x, y })
  }
  return points
}

type DrawCardinalSplineOptions = {
  ctx: CanvasRenderingContext2D
  points: { x: number; y: number }[]
  tension?: number
  isClosed?: boolean
  numOfSegments?: number
  vertical?: boolean
}

export function drawCardinalSpline({
  ctx,
  points,
  tension = 0.5,
  isClosed = true,
  numOfSegments = 16,
  vertical = false,
}: DrawCardinalSplineOptions) {
  // Copy the points to avoid editing the original array
  let pts = points.map((p) => [p.x, p.y])

  // If closed, add the first points to the end and vice versa
  // so that the spline loops around nicely
  if (isClosed) {
    pts.unshift(pts[pts.length - 1])
    pts.push(pts[1])
  } else {
    // for open curves, we can optionally pad with first/last duplicates
    pts = [[pts[0][0], pts[0][1]]]
      .concat(pts)
      .concat([[pts[pts.length - 1][0], pts[pts.length - 1][1]]])
  }

  // tension scale factor
  const t = tension

  ctx.beginPath()
  // Move to the first actual point
  ctx.moveTo(pts[1][0], pts[1][1])

  // For every pair of points
  for (let i = 1; i < pts.length - 2; i++) {
    const p0 = pts[i - 1]
    const p1 = pts[i]
    const p2 = pts[i + 1]
    const p3 = pts[i + 2]

    for (let j = 0; j < numOfSegments; j++) {
      const s = j / numOfSegments

      const ps = Math.pow(s, 2)
      const pss = s * ps

      const m0x = (p2[0] - p0[0]) * t
      const m0y = (p2[1] - p0[1]) * t
      const m1x = (p3[0] - p1[0]) * t
      const m1y = (p3[1] - p1[1]) * t

      const a = 2 * pss - 3 * ps + 1
      const b = -2 * pss + 3 * ps
      const c = pss - 2 * ps + s
      const d = pss - ps

      const x = a * p1[0] + b * p2[0] + c * m0x + d * m1x
      const y = a * p1[1] + b * p2[1] + c * m0y + d * m1y

      ctx.lineTo(x, y)
    }
  }

  if (isClosed) {
    ctx.closePath()
  }

  const minX = Math.min(...points.map((p) => p.x))
  const maxX = Math.max(...points.map((p) => p.x))
  const minY = Math.min(...points.map((p) => p.y))
  const maxY = Math.max(...points.map((p) => p.y))

  const gradient = generateGradient({
    ctx,
    minX,
    maxX,
    minY,
    maxY,
    flip: vertical,
  })

  ctx.fillStyle = gradient

  ctx.fill()
}
