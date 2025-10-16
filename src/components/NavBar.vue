<script>
export default{
    name:"NavBar"
}
</script>

<template>
 
<nav class="flex justify-between items-center py-5 px-3 h-35 bg-white shadow-sm">
  <div class="flex items-center space-x-4">
    <img src="@/assets/Project LOGO.png" alt="" class="w-60 h-60 mb-3 ">

    <ul class="flex space-x-20 text-gray-800 font-medium text-xl ml-17">
      <li><a href="#" class="hover:text-primary">Home</a></li>
      <li><a href="#" class="hover:text-primary">Sports</a></li>
      <li><a href="#" class="hover:text-primary">About</a></li>
      <li><a href="#" class="hover:text-primary">Contact Us</a></li>
    </ul>
    <div class="flex space-x-4">
      <button class="px-4 py-2 rounded-3xl border-2 border-primary text-primary hover:bg-primary hover:text-white transition w-40 h-17 ml-13 text-xl">Login</button>
      <button class="px-4 py-2 rounded-3xl bg-primary text-white hover:opacity-90 transition w-45 h-17 text-xl">Get Started</button>
      <button class="px-4 py-2 rounded-lg bg-primary2 text-white hover:opacity-90 transition w-12 h-11 text-lg mt-3 ">Ar</button>

    </div>

  </div>

</nav>

</template>

<style>


:root {
  --primary: #00C853; 
  --secondry: #00B0FF
}

.text-primary {
  color: var(--primary);
}
.bg-primary {
   background: linear-gradient(to right, var(--primary), var(--secondry));
}
.bg-primary2 {
   background: linear-gradient(to bottom , var(--primary), var(--secondry));
}
.border-primary {

  border-color: linear-gradient(to bottom, var(--primary), var(--secondry)) ;
}
</style>