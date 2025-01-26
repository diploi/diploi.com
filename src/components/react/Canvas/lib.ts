
const cos30 = Math.cos(Math.PI / 6) // ≈ 0.866
const sin30 = Math.sin(Math.PI / 6) // = 0.5

export const cubeMeth = ({
  s,
  startX,
  startY,
}: {
  s: number
  startX: number
  startY: number
}) => {
  // In an isometric projection, the horizontal edges are drawn at 30° angles.

  // Define the projection vectors:
  const vRight = { x: s * cos30, y: s * sin30 } // moves toward the front-right
  const vLeft = { x: -s * cos30, y: s * sin30 } // moves toward the front-left (or back-left)
  const vUp = { x: 0, y: -s } // vertical edge upward

  // Front face:
  // A: front-bottom-left (starting point)
  const A = { x: startX, y: startY }
  // B: front-bottom-right = A + vRight
  const B = { x: A.x + vRight.x, y: A.y + vRight.y }
  // D: front-top-left = A + vUp
  const D = { x: A.x + vUp.x, y: A.y + vUp.y }
  // C: front-top-right = B + vUp = A + vRight + vUp
  const C = { x: B.x + vUp.x, y: B.y + vUp.y }

  // Back face:
  // E: back-bottom-left = A + vLeft
  const E = { x: A.x + vLeft.x, y: A.y + vLeft.y }
  // H: back-top-left = D + vLeft = A + vUp + vLeft
  const H = { x: D.x + vLeft.x, y: D.y + vLeft.y }
  // F: back-bottom-right = B + vLeft = A + vRight + vLeft
  const F = { x: B.x + vLeft.x, y: B.y + vLeft.y }
  // G: back-top-right = C + vLeft = A + vRight + vUp + vLeft
  const G = { x: C.x + vLeft.x, y: C.y + vLeft.y }

  return {
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
  }
}
type Cube = ReturnType<typeof cubeMeth>


export const drawCubeTop = (cube: Cube) => {
  const { C, D, G, H } = cube

  const cubePath = new Path2D()
  cubePath.moveTo(D.x, D.y)
  cubePath.lineTo(C.x, C.y)
  cubePath.lineTo(G.x, G.y)
  cubePath.lineTo(H.x, H.y)
  cubePath.closePath()

  return cubePath
}

export const drawCubeLeft = (cube: Cube) => {
  const { A, E, F, H } = cube
  const cubePath = new Path2D()
  cubePath.moveTo(H.x, H.y)
  cubePath.lineTo(A.x, A.y)
  cubePath.lineTo(F.x, F.y)
  cubePath.lineTo(E.x, E.y)
  cubePath.closePath()

  return cubePath
}

export const drawCubeRight = (cube: Cube) => {
  const { B, F, G, C } = cube
  const cubePath = new Path2D()
  cubePath.moveTo(B.x, B.y)
  cubePath.lineTo(F.x, F.y)
  cubePath.lineTo(G.x, G.y)
  cubePath.lineTo(C.x, C.y)
  cubePath.closePath()

  return cubePath
}

export const drawPackPlaneBottom = (cube: Cube) => {
  const { A, B, C, D } = cube

  const cubePath = new Path2D()
  cubePath.moveTo(A.x, A.y)
  cubePath.lineTo(B.x, B.y)
  cubePath.lineTo(C.x, C.y)
  cubePath.lineTo(D.x, D.y)
  cubePath.closePath()

  return cubePath
}

export const drawPackPlaneLeft = (cube: Cube) => {
  const { B, E, F, G } = cube

  const cubePath = new Path2D()
  cubePath.moveTo(B.x, B.y)
  cubePath.lineTo(F.x, F.y)
  cubePath.lineTo(E.x, E.y)
  cubePath.lineTo(G.x, G.y)
  cubePath.closePath()

  return cubePath
}
