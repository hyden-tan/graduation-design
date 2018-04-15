# C 可变参数 与 C 命令行参数
## C 可变参数
有时，您可能会碰到这样的情况，您希望函数带有可变数量的参数，而不是预定义数量的参数。C 语言为这种情况提供了一个解决方案，它允许您定义一个函数，能根据具体的需求接受可变数量的参数。下面的实例演示了这种函数的定义。

    int func(int, ... ) 
    {
       .
       .
       .
    }
    
    int main()
    {
       func(2, 2, 3);
       func(3, 2, 3, 4);
    }

请注意，函数 func() 最后一个参数写成省略号，即三个点号（...），省略号之前的那个参数是 int，代表了要传递的可变参数的总数。为了使用这个功能，您需要使用 stdarg.h 头文件，该文件提供了实现可变参数功能的函数和宏。具体步骤如下：

- 定义一个函数，最后一个参数为省略号，省略号前面可以设置自定义参数。
- 在函数定义中创建一个 va_list 类型变量，该类型是在 stdarg.h 头文件中定义的。
- 使用 int 参数和 va_start 宏来初始化 va_list 变量为一个参数列表。宏 va_start 是在 stdarg.h 头文件中定义的。
- 使用 va_arg 宏和 va_list 变量来访问参数列表中的每个项。
- 使用宏 va_end 来清理赋予 va_list 变量的内存。

现在让我们按照上面的步骤，来编写一个带有可变数量参数的函数，并返回它们的平均值：

    #include &lt;stdio.h>
    #include &lt;stdarg.h>
    
    double average(int num,...)
    {
    
        va_list valist;
        double sum = 0.0;
        int i;
    
        /* 为 num 个参数初始化 valist */
        va_start(valist, num);
    
        /* 访问所有赋给 valist 的参数 */
        for (i = 0; i < num; i++)
        {
           sum += va_arg(valist, int);
        }
        /* 清理为 valist 保留的内存 */
        va_end(valist);
    
        return sum/num;
    }
    
    int main()
    {
       printf("Average of 2, 3, 4, 5 = %f\n", average(4, 2,3,4,5));
       printf("Average of 5, 10, 15 = %f\n", average(3, 5,10,15));
    }

上面的代码被编译和执行时，它会产生下列结果。应该指出的是，函数 average() 被调用两次，每次第一个参数都是表示被传的可变参数的总数。省略号被用来传递可变数量的参数。

    Average of 2, 3, 4, 5 = 3.500000
    Average of 5, 10, 15 = 10.000000

## C 命令行参数
执行程序时，可以从命令行传值给 C 程序。这些值被称为命令行参数，它们对程序很重要，特别是当您想从外部控制程序，而不是在代码内对这些值进行硬编码时，就显得尤为重要了。
命令行参数是使用 main() 函数参数来处理的，其中，argc 是指传入参数的个数，argv[] 是一个指针数组，指向传递给程序的每个参数。下面是一个简单的实例，检查命令行是否有提供参数，并根据参数执行相应的动作：

    #include &lt;stdio.h>
    
    int main( int argc, char *argv[] )  
    {
       if( argc == 2 )
       {
          printf("The argument supplied is %s\n", argv[1]);
       }
       else if( argc > 2 )
       {
          printf("Too many arguments supplied.\n");
       }
       else
       {
          printf("One argument expected.\n");
       }
    }

使用一个参数，编译并执行上面的代码，它会产生下列结果：

    The argument supplied is testing

使用两个参数，编译并执行上面的代码，它会产生下列结果：

    Too many arguments supplied.

不传任何参数，编译并执行上面的代码，它会产生下列结果：

    One argument expected

应当指出的是，`argv[0]` 存储程序的名称，`argv[1] `是一个指向第一个命令行参数的指针，`*argv[n] `是最后一个参数。如果没有提供任何参数，`argc` 将为 1，否则，如果传递了一个参数，`argc` 将被设置为 2。
多个命令行参数之间用空格分隔，但是如果参数本身带有空格，那么传递参数的时候应把参数放置在双引号 "" 或单引号 '' 内部。让我们重新编写上面的实例，有一个空间，那么你可以通过这样的观点，把它们放在双引号或单引号""""。让我们重新编写上面的实例，向程序传递一个放置在双引号内部的命令行参数：

    #include &lt;stdio.h>
    
    int main( int argc, char *argv[] )  
    {
       printf("Program name %s\n", argv[0]);
     
       if( argc == 2 )
       {
          printf("The argument supplied is %s\n", argv[1]);
       }
       else if( argc > 2 )
       {
          printf("Too many arguments supplied.\n");
       }
       else
       {
          printf("One argument expected.\n");
       }
    }

使用一个用空格分隔的简单参数，参数括在双引号中，编译并执行上面的代码，它会产生下列结果：

    Progranm name ./a.out
    The argument supplied is testing1 testing2




