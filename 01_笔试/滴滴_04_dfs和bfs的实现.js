// 深度和广度的伪代码实现
// 深度优先通过栈实现
function DFS(N) {
  for (所有节点) {
    if (该节点未被访问) {
      dfs(该节点);
    }
  }
}
// 某个节点开始的进行深度优先遍历搜索,递归实现方式
function dfs(node某个节点) {
  visit(node.val访问该节点);
  node.isVisit = true;//标记该节点
  for (遍历这个节点的所有邻接节点) {
    if (某个邻接p定点没被访问) {
      dfs(p)
    }
  }
}
// 栈实现
function dfsStack(node某个节点) {
  初始化栈, 将该节点入栈
  node.isVisit = true;//标记该接待您
  while (栈非空) {
    访问栈顶节点node
    全局数组中将该节点标记为已经访问
    将栈顶元素出栈
    for (遍历node得所有邻接顶点) {
      某邻接顶点p没被访问过, 入栈
    }
  }
}
// 广度优先通过队列实现
function BFS(N) {
  for (遍历所有顶点) {
    if (某节点node未被访问) {
      bfs(该节点node)
    }
  }
}
// 从某个节点开始广度优先遍历
function bfs(node) {
  初始化队列
  while (queue不为空) {
    访问对头顶点s
    标记s已经遍历
    对头元素s出队列
    for (遍历s的所有邻接顶点) {
      if (某个邻接顶点未被访问) {
        p入队列
      }
    }
  }
}