<script lang="ts">
  import { onMount } from "svelte";

  let grid: string[][] = [];
  const rows: number = 20;
  const cols: number = 20;
  let rotations: number[][] = [];
  let animationFrame: number;
  let time: number = 0;
  let isClicked: boolean = false;
  let email: string;
  let currentTime: string = "";
  let status: string = "";
  let permissionGranted: boolean = false;

  function initializeGrid(): void {
    for (let i = 0; i < rows; i++) {
      grid[i] = [];
      rotations[i] = [];
      for (let j = 0; j < cols; j++) {
        grid[i][j] = "/";
        rotations[i][j] = 0; // Initialrotation auf 0 setzen
      }
    }
  }

  function animate(): void {
    time += 0.05; // Geschwindigkeit der Animation
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        // Sinuswelle für einen sanften Atmungseffekt
        rotations[i][j] = Math.sin(time + (i + j) / 2) * 45;
      }
    }
    animationFrame = requestAnimationFrame(animate);
  }

  function handleMouseMove(event: MouseEvent): void {
    const rect = event.currentTarget
      ? (event.currentTarget as HTMLElement).getBoundingClientRect()
      : { left: 0, top: 0, width: 0, height: 0 };
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const col = Math.floor((x / rect.width) * cols);
    const row = Math.floor((y / rect.height) * rows);

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const dx = j - col;
        const dy = i - row;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        const influence = Math.max(0, 1 - distance / 5); // Einflussfaktor basierend auf der Entfernung
        rotations[i][j] = rotations[i][j] * (1 - influence) + angle * influence;
      }
    }
  }

  function handleDeviceOrientation(event: DeviceOrientationEvent): void {
    const { beta, gamma } = event;
    const col = Math.floor((((gamma ?? 0) + 90) / 180) * cols);
    const row = Math.floor((((beta ?? 0) + 90) / 180) * rows);

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const dx = j - col;
        const dy = i - row;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        const influence = Math.max(0, 1 - distance / 2); // Stärkere Bewegung basierend auf der Entfernung
        rotations[i][j] = rotations[i][j] * (1 - influence) + angle * influence;
      }
    }
  }

  function handleClick(): void {
    isClicked = !isClicked; // Toggle Zustand
    if (isClicked) {
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          rotations[i][j] += 360;
        }
      }
    }
  }

  function decodeEmail(encoded: string): string {
    return encoded.replace(/[a-zA-Z]/g, function (c) {
      return String.fromCharCode(
        (c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26
      );
    });
  }

  function updateTime(): void {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    currentTime = `${hours.toString().padStart(2, "0")}<span class="blink">:</span>${minutes.toString().padStart(2, "0")}<span class="blink">:</span>${seconds.toString().padStart(2, "0")}`;

    // Status basierend auf der Uhrzeit
    if (hours >= 14 || hours < 2) {
      status = "online";
    } else {
      status = "offline";
    }
  }

  async function requestPermission() {
    if (typeof DeviceOrientationEvent.requestPermission === "function") {
      try {
        const permissionState =
          await DeviceOrientationEvent.requestPermission();
        if (permissionState === "granted") {
          permissionGranted = true;
          window.addEventListener("deviceorientation", handleDeviceOrientation);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      permissionGranted = true;
      window.addEventListener("deviceorientation", handleDeviceOrientation);
    }
  }

  onMount((): void => {
    initializeGrid();
    animationFrame = requestAnimationFrame(animate);
    email = decodeEmail("eboregohegmvx@tznvy.pbz");
    updateTime();
    setInterval(updateTime, 1000); // Aktualisiere die Uhrzeit jede Sekunde

    // Anfrage zur Nutzung des Gyroskops
    requestPermission();
  });

  function stopAnimation(): void {
    cancelAnimationFrame(animationFrame);
  }
</script>

<main>
  <p>
    Robert Burtzik is a designer and developer based in Hamburg. He is
    interested in the intersection of design, technology, and culture. He is
    currently <span class="status">{status}</span>.
  </p>
  <p class="time">
    Current Time: {@html currentTime}
  </p>
  {#if !permissionGranted}
    <button on:click={requestPermission} class="permission-button">
      Enable Gyroscope
    </button>
  {/if}
  <div
    class="ascii-grid"
    role="button"
    tabindex="0"
    on:mousemove={handleMouseMove}
    on:mouseenter={stopAnimation}
    on:mouseleave={() => (animationFrame = requestAnimationFrame(animate))}
    on:click={handleClick}
    on:keydown={(event) => {
      if (event.key === "Enter" || event.key === " ") {
        handleClick();
      }
    }}
  >
    {#each grid as row, rowIndex}
      <div class="ascii-row">
        {#each row as cell, colIndex}
          <span style="transform: rotate({rotations[rowIndex][colIndex]}deg)"
            >{cell}</span
          >
        {/each}
      </div>
    {/each}
  </div>

  <nav>
    <footer>
      <p>
        This site is a wandering flow, a collection of filaments, a promise of
        perception in both their analog and digital nature. It seeks to explore
        the motivations behind the creation of digital spaces and the ways in
        which they can be used to create new forms of expression.
      </p>
      <p>
        This place is built with svelte, vite and typescript and is running on
        vercel.
      </p>
      <p>Void Filamente was last updated on 21/09/2024</p>
      <a href="https://www.are.na/robert-burtzik/channels">Are.na</a>
      <a href="https://www.instagram.com/rburtzik">Instagram</a>
      <a href="mailto:{email}">{email}</a>
      <p>© 2024 Robert Burtzik. All rights reserved.</p>
    </footer>
    <!-- <a href="/photo-space">Photo Space</a> -->
  </nav>
</main>

<style>
  p {
    margin: 0 0 20px 0;
  }

  nav {
    bottom: 2rem;
    max-width: 800px;
  }

  nav a {
    display: inline-block;
    text-underline-offset: 0.2em;
    color: #000;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  nav a:hover {
    color: blue;
  }

  main {
    padding: 40px;
    max-width: 800px;
    margin: 0 auto;
  }

  footer {
    border: 1px double #000;
    padding: 1.5rem 2rem 0 2rem;
  }

  .ascii-grid {
    user-select: none;
    display: inline-block;
    width: 100%; /* Passt die Breite des Grids an den Viewport an */
    max-width: 100%; /* Verhindert Überlauf */
    background: #aaa;
    color: #333;
    font-family: "CommitMono", "Courier New", Courier, monospace;
    line-height: 1;
    cursor: pointer;
    margin-bottom: 20px;
    transition: background 0.3s;
  }

  .ascii-row {
    display: flex;
    justify-content: center; /* Zentriert die Zeileninhalte */
  }

  .ascii-row span {
    display: inline-block;
    width: 20px;
    height: 20px;
    text-align: center;
    transition: transform 0.3s;
  }

  .blink {
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    from,
    to {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  .status {
    font-weight: bold;
  }

  .permission-button {
    margin-bottom: 20px;
    padding: 10px 20px;
    background-color: #000;
    color: #fff;
    border: none;
    cursor: pointer;
    font-family: "CommitMono", "Courier New", Courier, monospace;
  }

  .permission-button:hover {
    background-color: #333;
  }

  @media (min-width: 768px) {
    .permission-button {
      display: none;
    }
  }
</style>
