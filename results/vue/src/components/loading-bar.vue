<template>
  <div class="progress" :class="{ 'visible': visible }">
    <div class="indeterminate"></div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default() {
        return false
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../styles/variables.less';

.progress {
  height: 4px;
  opacity: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: opacity .15s ease;

  &.visible {
    opacity: 1;
  }
}

.indeterminate {
  background-color: @accent;
  width: 70%;

  &:before,
  &:after {
    -moz-animation: indeterminate 1s cubic-bezier(.65, .815, .735, .395) infinite;
    -webkit-animation: indeterminate 1s cubic-bezier(.65, .815, .735, .395) infinite;
    animation: indeterminate 1s cubic-bezier(.65, .815, .735, .395) infinite;
    content: '';
    bottom: 0;
    top: 0;
    position: absolute;
    background-color: inherit;
    left: 0;
    will-change: left,right;
  }
}

@-webkit-keyframes indeterminate {
	0% {
		left:-35%;
		right:100%
	}
	100%,60% {
		left:100%;
		right:-90%
	}
}

@-moz-keyframes indeterminate {
	0% {
		left:-35%;
		right:100%
	}
	100%,60% {
		left:100%;
		right:-90%
	}
}

@keyframes indeterminate {
	0% {
		left:-35%;
		right:100%
	}
	100%,60% {
		left:100%;
		right:-90%
	}
}
</style>
