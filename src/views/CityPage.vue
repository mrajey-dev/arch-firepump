<template>
<div>

<h1>Arch Enterprises {{ city }}</h1>

<p>
Arch Enterprises is leading industrial equipment supplier in {{ city }}.
We provide installation, fabrication and maintenance services in {{ city }}.
</p>

<button>Contact Us in {{ city }}</button>

</div>
</template>

<script>
export default {
computed:{
city(){
return this.$route.params.city.charAt(0).toUpperCase() + this.$route.params.city.slice(1)
}
}
}
</script>