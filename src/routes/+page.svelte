<script lang="ts">
  import type { ActionData } from './$types';

  export let form: ActionData;
</script>

<form method="POST" action="?/login">
  {#if form?.missing}<p class="error">The email field is required</p>{/if}
  {#if form?.incorrect}<p class="error">Invalid credentials!</p>{/if}
  {#if form?.alreadyExist}<p class="error">User already registered!</p>{/if}
  <label>
    Email
    <input name="email" type="email" value="{form?.email ?? ''}" />
  </label>
  <label>
    Password
    <input name="password" type="password" />
  </label>
  <button>Log in</button>
  <button formaction="?/register">Register</button>
</form>
