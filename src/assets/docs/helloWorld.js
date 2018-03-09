export default {
    title: 'Hello World',
    content: ` ## 介绍
    
C 语言是一种通用的、面向过程式的计算机程序设计语言。1972 年，为了移植与开发 UNIX 操作系统，丹尼斯·里奇在贝尔电话实验室设计开发了 C 语言。

C 语言是一种广泛使用的计算机语言，它与 Java 编程语言一样普及，二者在现代软件程序员之间都得到广泛使用。

当前最新的C语言标准为 C11 ，在它之前的C语言标准为 C99。
## 第一个程序
\`\`\`
#include &lt;stdio.h>
int main()
{
    /* 我的第一个 C 程序 */
    printf("Hello, World! \\n");
    return 0;
}
\`\`\`

#### 代码解析
+ stdio.h 是一个头文件 (标准输入输出头文件) , #include 是一个预处理命令，用来引入头文件。 当编译器遇到 printf() 函数时，如果没有找到 stdio.h 头文件，会发生编译错误。
+ 所有的 C 语言程序都需要包含 main() 函数。 代码从 main() 函数开始执行。 
+ printf() 用于格式化输出到屏幕。printf() 函数在 "stdio.h" 头文件中声明。
+ return 0; 语句用于表示退出程序。  
    `
}