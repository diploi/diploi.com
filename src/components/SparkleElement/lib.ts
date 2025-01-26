export const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max)
}

export const random = (min: number, max: number) => {
  return Math.random() * (max - min) + min
}


const isOverlapping = (
  sparkleA: { left: number; top: number; size: number },
  sparkleB: { left: number; top: number; size: number },
) => {
  const dx = sparkleA.left - sparkleB.left
  const dy = sparkleA.top - sparkleB.top
  const distance = Math.sqrt(dx * dx + dy * dy)
  // If distance between centers < sum of radii => overlap
  return distance < sparkleA.size / 2 + sparkleB.size / 2
}

const randomOutsideCenter = (preferEnd: boolean) => {
  // 50% chance for the "top" band (0-10), 50% for the "bottom" band (90-100).
  // Adjust as needed if you want a different distribution.
  if (Math.random() < 0.5) {
    return preferEnd ?  random(-5, 5) :  random(85, 95)
  }
  return random(5, 85)
}

const generateSparkle = (minSize: number, maxSize: number, idx: number) => {
  const size = clamp(random(minSize, maxSize), minSize, maxSize)
  const minDuration = 1000 + size * 16 * 75
  const maxDuration = 3000 + size * 16 * 125
  const duration = clamp(random(minDuration, maxDuration), 2000, 10000)
  const delay = clamp(random(0, 5000), 0, 5000)

  // Positions in percentage (0–100), but skipping 10–90 range:
  const isEven = idx % 2 === 0
  const top = randomOutsideCenter(isEven)
  const left = randomOutsideCenter(isEven)

  // Return numeric fields plus the final style strings
  return {
    leftNum: left,
    topNum: top,
    sizeNum: size, // store numeric size
    size: `${size}rem`,
    delay: `${delay}ms`,
    duration: `${duration}ms`,
    left: `${left}%`,
    top: `${top}%`,
  }
}

type Sparkle = ReturnType<typeof generateSparkle>

export const createSparkles = (
  sparkleCount: number,
  minSize: number,
  maxSize: number,
) => {
  const results: ReturnType<typeof generateSparkle>[] = []
  const maxAttempts = 50 // max tries per sparkle to find a non-overlapping spot

  for (let i = 0; i < sparkleCount; i++) {
    let sparkle: Sparkle
    let attempts = 0

    do {
      sparkle = generateSparkle(
        minSize,
        maxSize,
        i,

      )
      attempts++
      // Check overlap with already placed sparkles
      const overlapping = results.some((existing) => {
        return isOverlapping(
          {
            left: sparkle.leftNum,
            top: sparkle.topNum,
            size: sparkle.sizeNum,
          },
          {
            left: existing.leftNum,
            top: existing.topNum,
            size: existing.sizeNum,
          },
        )
      })

      if (!overlapping) {
        // If no overlap, accept and break
        results.push(sparkle)
        break
      }
    } while (attempts < maxAttempts)
    // If attempts run out, we simply skip placing more sparkles
    // or you could handle it another way (e.g. reduce size or break).
  }

  return results
}
