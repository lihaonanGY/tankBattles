<template>
  <div class="demo">

    <!-- 所谓指令，其实本质就是在模板中出现的特殊标记，根据这些标记让框架知道需要对这里的 DOM 元素进行什么操作。 -->

  	<!-- 文本渲染 -->
    <h1>文本渲染 v-text v-html</h1>
    <!-- 内容按普通 HTML 插入 -->
  	<p v-html="hello"></p>
    <!-- 内容按 纯文本 插入 -->
  	<p v-text="hello"></p>
  	{{ hello }}

    <p v-pre >{{ hello }}</p>

    <br>
    <br>


    <!-- 条件渲染 -->
    <h1>条件渲染 v-if v-show</h1>
    <a v-if="isPartA">partA</a>
    <!-- <a v-show="!isPartA">partB</a> -->
    <a v-else>partB</a>
    <button @click="toggle">toggle</button>
    <div v-if="type === 'A'">
      A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else>
      Not A/B/C
    </div>
    <button @click="togglea">toggle-ABC</button>
    <br>
    <br>


  	<!-- 列表渲染 -->
    <h1>列表渲染 v-for</h1>
    <ul>
    	<li v-for="item in fruits">
        {{ item.variety }} - {{ item.price }}
      </li>
      <br>
      <li v-for="(item,index) in fruits" v-text="item.variety+'-' + item.price + '-'+index">
      </li>
      <br>
      <li v-for="(item,index) in objList"> {{ item }} - {{ index }}
      </li>
    </ul>
    <button v-on:click="addItem">addItem</button>

    <!-- v-for的优先级高于v-if -->
    <ul>
      <li v-for="(todo,index) in todos" v-if="todo.name === 'one'">
        {{ todo.name }} - {{ index }}
      </li>
    </ul>
    <!-- 直接跳过整个循环 -->
    <ul  v-if="!aC">
      <li v-for="(todo,index) in todos">
        {{ todo.name }} - {{ index }}
      </li>
    </ul>

    <br>
    <br>

    <!-- v-bind 动态绑定特性到表达式-->
    <h1>动态绑定 v-bind</h1>
    <a v-bind:href="link" :title="link" >百度</a>
    <!-- 绑定一个带数据对象 -->
    <a :class="className"  :style="aStyle">className</a>
    <a :style="{'color': 'blue','font-size': '10px'}">className-1</a>
    <!-- 绑定一个数组-->
    <a class="a-1" :class="classNames" >classNames</a>
    <a :class="[classA,classB,{'a-C': aC}]">classNames-1</a>
    <la-La :class="classNames"></la-La>
    <!-- :class={classA: index % 2 } -->
    <br>
    <br>

    <!-- 事件处理器 -->
    <h1>事件处理器 v-on</h1>
    <form>
      <input @keydown="onKeyDown">
    </form>
    <form>
      <input v-on:keydown.enter="onKeyDown">
    </form>
    <div>
      <button v-on:click="counter += 1">增加 1</button>
      <p>这个按钮被点击了 {{ counter }} 次。</p>
    </div>
    <button v-on:click="say('hello!')">Submit</button>
    <br>
    <br>

    <!-- 数据双向绑定 -->
    <h1>数据双向绑定 v-model</h1>
    <!-- v-once -->
    <form action="">
      <input v-once type="text" v-model="value">
      {{ value }}
    </form>
    <form action="">
      <input type="text" v-model.lazy="value">
      {{ value }}
    </form>
    <form action="">
      <input type="text" v-model.number="value">
      {{ typeof value }}
    </form>
    <!-- 裁剪 -->
    <form action="">
      <input type="text" v-model.trim="value">
      {{ value }}
    </form>
    <br>

    <form action="">
      {{ myValue }}
      <input type="checkbox" value="lala" v-model="myValue">
      <label>lala</label>
      <input type="checkbox" value="gaygay" v-model="myValue">
      <label>gaygay</label>
    </form>
    <br>

    {{ yourValue }}
    <select v-model="yourValue">
      <option value="0">lala</option>
      <option value="1">gaygay</option>
    </select>
    <br>

    <form>
      {{ yourValue }}
      <select v-model="yourValue">
        <option v-for="item in allValue" :value="item.value">{{ item.name }}</option>
      </select>
    </form>
    <br>
    <br>

  </div>
</template>

<script>
// import laLa from '../components/laLa.vue'
export default {
  components: {
//    laLa
  },
  data () {
    return {
      hello: '<span>lalala</span>',
      link: 'http://www.baidu.com',
      classA: 'a-A',
      classB: 'a-B',
      className: {
        'a-true': true,
        'a-false': false
      },
      counter: 0,
      type: 'A',
      classNames: ['a-a', 'a-b'],
      aC: true,
      someThing: 'someThings',
      aStyle: {
        'color': 'red',
        'font-size': '30px'
      },
      isPartA: true,
      value: '10',
      myValue: [],
      yourValue: '1',
      todos: [
        {
          name: 'one'
        },
        {
          name: 'two'
        },
        {
          name: 'one'
        }
      ],
      allValue: [
        {
          name: 'lala',
          value: 0
        },
        {
          name: 'gaygay',
          value: 1
        }
      ],
      fruits: [
        {
          variety: 'apple',
          price: 22
        },
        {
          variety: 'litchi',
          price: 33
        },
        {
          variety: 'banana',
          price: 36
        }
      ],
      objList: {
        variety: 'lala',
        price: 233,
        love: 'eat'
      }
    }
  },
  methods: {
    addItem () {
      this.fruits.push(this.objList)
    },
    toggle () {
      this.isPartA = !this.isPartA
    },
    togglea () {
      if (this.type === 'C') {
        this.type = ''
      } else if (this.type === '') {
        this.type = 'A'
      } else if (this.type === 'A') {
        this.type = 'B'
      } else if (this.type === 'B') {
        this.type = 'C'
      }
    },
    onKeyDown () {
      console.log('on key down')
    },
    say (msg) {
      alert(msg)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.demo {
	margin: 0 auto;
	width: 800px;
}
h1 {
  font-size: 60px;
  color: red;
}
p,li,a {
  font-weight: normal;
  font-size: 50px;
}
</style>
