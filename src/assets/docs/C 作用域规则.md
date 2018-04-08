# C 作用域规则
任何一种编程中，作用域是程序中定义的变量所存在的区域，超过该区域变量就不能被访问。C 语言中有三个地方可以声明变量：
1. 在函数或块内部的局部变量
2. 在所有函数外部的全局变量
3. 在形式参数的函数参数定义中

让我们来看看什么是局部变量、全局变量和形式参数。

## 局部变量
在某个函数或块的内部声明的变量称为局部变量。它们只能被该函数或该代码块内部的语句使用。局部变量在函数外部是不可知的。下面是使用局部变量的实例。在这里，所有的变量 a、b 和 c 是 main() 函数的局部变量。

**实例**

    #include &lt;stdio.h>
     
    int main ()
    {
      /* 局部变量声明 */
      int a, b;
      int c;
     
      /* 实际初始化 */
      a = 10;
      b = 20;
      c = a + b;
     
      printf ("value of a = %d, b = %d and c = %d\n", a, b, c);  // out : value of a = 10, b = 20 and c = 30
     
      return 0;
    }

## 全局变量
全局变量是定义在函数外部，通常是在程序的顶部。全局变量在整个程序生命周期内都是有效的，在任意的函数内部能访问全局变量。

全局变量可以被任何函数访问。也就是说，全局变量在声明后整个程序中都是可用的。下面是使用全局变量和局部变量的实例：

**实例**

    #include &lt;stdio.h>
     
    /* 全局变量声明 */
    int g;
     
    int main ()
    {
      /* 局部变量声明 */
      int a, b;
     
      /* 实际初始化 */
      a = 10;
      b = 20;
      g = a + b;
     
      printf ("value of a = %d, b = %d and g = %d\n", a, b, g);  //  out : value of a = 10, b = 20 and g = 30
     
      return 0;
    }

在程序中，局部变量和全局变量的名称可以相同，但是在函数内，局部变量的值会覆盖全局变量的值。下面是一个实例：

**实例**

    #include &lt;stdio.h>
     
    /* 全局变量声明 */
    int g = 20;
     
    int main ()
    {
      /* 局部变量声明 */
      int g = 10;
     
      printf ("value of g = %d\n",  g);  // out : value of g = 10
     
      return 0;
    }

## 形式参数
函数的参数，形式参数，被当作该函数内的局部变量，它们会优先覆盖全局变量。下面是一个实例：

**实例**

    #include &lt;stdio.h>
     
    /* 全局变量声明 */
    int a = 20;
     
    int main ()
    {
      /* 在主函数中的局部变量声明 */
      int a = 10;
      int b = 20;
      int c = 0;
      int sum(int, int);
     
      printf ("value of a in main() = %d\n",  a);  // out : value of a in main() = 10
      c = sum( a, b);
      printf ("value of c in main() = %d\n",  c);  // out : value of c in main() = 30
     
      return 0;
    }
     
    /* 添加两个整数的函数 */
    int sum(int a, int b)
    {
        printf ("value of a in sum() = %d\n",  a);  // out :  value of a in sum() = 10 
        printf ("value of b in sum() = %d\n",  b);  // out : value of b in sum() = 20
     
        return a + b;
    }

## 初始化局部变量和全局变量
当局部变量被定义时，系统不会对其初始化，您必须自行对其初始化。定义全局变量时，系统会自动对其初始化，如下所示：

- **int**
初始化默认值 0
- **char**
初始化默认值 '\0'
- **float**
初始化默认值 0
- **double**
初始化默认值 0
- **pointer**
初始化默认值 NULL


正确地初始化变量是一个良好的编程习惯，否则有时候程序可能会产生意想不到的结果，因为未初始化的变量会导致一些在内存位置中已经可用的垃圾值。