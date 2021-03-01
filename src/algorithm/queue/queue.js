import { queue } from "jquery"

const Queue = function() {
  const items = []
  this.enQueue = (item) => {
    items.push(item)
  }

  this.deQueue = () => {
    return items.shift()
  }

  this.front = () => {
    return items[0]
  }

  this.isEmpty = () => {
    return items.length === 0
  }

  this.size = () => {
    return items.length
  }

  this.getItems = () => {
    return items
  }
}

/**
 * 使用队列实现击鼓传花
 */
const transformFlower = (list, num) => {
  const queue = new Queue()
  // 入列
  for(let i = 0; i < list.length; i++) {
    queue.enQueue(list[i])
  }
  console.log(queue.getItems())
  while(queue.size() > 1) {
    for (let j = 0; j < num - 1; j++) {
      queue.enQueue(queue.deQueue())
    }
    const out = queue.deQueue()
    console.log(out + ' Out 了')
  }
  return queue.deQueue()
}


const PriorityQueue = function() {
  const items = []
  const PriorityItem = function(ele, priority) {
    this.ele = ele
    this.priority = priority
  }


  this.enQueue = (ele, priority) => {
    const insertItem = new PriorityItem(ele, priority)
    // 按照优先级来插入
    let isAdd = false
    for(let i = 0; i < items.length; i++) {
      if (insertItem.priority > items[i].priority) {
        items.splice(i, 0, insertItem)
        isAdd = true
        break
      }
    }
    if (!isAdd) {
      items.push(insertItem)
    }
    return items
  }
}
