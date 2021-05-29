<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
/* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: gray white;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

*::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0);
}

*::-webkit-scrollbar-thumb {
  background-color: gray;
  border-radius: 10px;
  border: 2px solid white;
}
</style>
