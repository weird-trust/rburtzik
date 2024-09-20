<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./routes/index.svelte";
  import PhotoSpace from "./routes/photo-space.svelte";
</script>

<Router>
  <Route path="/" component={Home} />
  <Route path="photo-space" component={PhotoSpace} />
</Router>
