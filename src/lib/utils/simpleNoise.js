export const simpleNoise = {
  // Permutation table
  permutation: [...Array(256)].map(() => Math.floor(Math.random() * 256)),
  
  // Get noise value
  get(x, y, z) {
    // Use a simpler, more direct noise calculation for smoother movement
    const scale = 0.005; // Scale factor for movement speed
    
    return (
      Math.sin(x * scale + z * 0.001) * 
      Math.cos(y * scale + z * 0.0015) * 0.5 + 0.5
    );
  },

  // Helper function for additional randomness if needed
  random(x, y) {
    return Math.sin(x * 12.9898 + y * 78.233) * 43758.5453123 % 1;
  }
};