export default {
    title: '结构体与共用体',
    content: ` #  C 结构体与共用体
    ## C结构体
    C 数组允许定义可存储相同类型数据项的变量，结构是 C 编程中另一种用户自定义的可用的数据类型，它允许您存储不同类型的数据项。
    结构用于表示一条记录，假设您想要跟踪图书馆中书本的动态，您可能需要跟踪每本书的下列属性：
    - Title
    - Author
    - Subject
    - Book ID
    
    ### 定义结构
    为了定义结构，您必须使用 struct 语句。struct 语句定义了一个包含多个成员的新的数据类型，struct 语句的格式如下：
    
        struct [structure tag]
        {
           member definition;
           member definition;
           ...
           member definition;
        } [one or more structure variables];
    
    structure tag 是可选的，每个 member definition 是标准的变量定义，比如 int i; 或者 float f; 或者其他有效的变量定义。在结构定义的末尾，最后一个分号之前，您可以指定一个或多个结构变量，这是可选的。下面是声明 Book 结构的方式：
    
        struct Books
        {
           char  title[50];
           char  author[50];
           char  subject[100];
           int   book_id;
        } book;
    
    ### 访问结构成员
    为了访问结构的成员，我们使用成员访问运算符（.）。成员访问运算符是结构变量名称和我们要访问的结构成员之间的一个句号。您可以使用 struct 关键字来定义结构类型的变量。下面的实例演示了结构的用法：
    
    **实例**
    
        #include &lt;stdio.h>
        #include &lt;string.h>
         
        struct Books
        {
           char  title[50];
           char  author[50];
           char  subject[100];
           int   book_id;
        };
         
        int main( )
        {
           struct Books Book1;        /* 声明 Book1，类型为 Books */
           struct Books Book2;        /* 声明 Book2，类型为 Books */
         
           /* Book1 详述 */
           strcpy( Book1.title, "C Programming");
           strcpy( Book1.author, "Nuha Ali"); 
           strcpy( Book1.subject, "C Programming Tutorial");
           Book1.book_id = 6495407;
         
           /* Book2 详述 */
           strcpy( Book2.title, "Telecom Billing");
           strcpy( Book2.author, "Zara Ali");
           strcpy( Book2.subject, "Telecom Billing Tutorial");
           Book2.book_id = 6495700;
         
           /* 输出 Book1 信息 */
           printf( "Book 1 title : %s\n", Book1.title);  // out :  Book 1 title : C Programming 
           printf( "Book 1 author : %s\n", Book1.author);  // out :  Book 1 author : Nuha Ali 
           printf( "Book 1 subject : %s\n", Book1.subject);  // out : Book 1 subject : C Programming Tutorial  
           printf( "Book 1 book_id : %d\n", Book1.book_id);  // out : Book 1 book_id : 6495407  
         
           /* 输出 Book2 信息 */
           printf( "Book 2 title : %s\n", Book2.title);  // out : Book 2 title : Telecom Billing  
           printf( "Book 2 author : %s\n", Book2.author);  // out : Book 2 author : Zara Ali  
           printf( "Book 2 subject : %s\n", Book2.subject);  // out :  Book 2 subject : Telecom Billing Tutorial 
           printf( "Book 2 book_id : %d\n", Book2.book_id);  // out :  Book 2 book_id : 6495700 
         
           return 0;
        }
    
    ### 结构作为函数参数
    您可以把结构作为函数参数，传参方式与其他类型的变量或指针类似。您可以使用上面实例中的方式来访问结构变量：
    
    **实例**
    
        #include &lt;stdio.h>
        #include &lt;string.h>
         
        struct Books
        {
           char  title[50];
           char  author[50];
           char  subject[100];
           int   book_id;
        };
         
        /* 函数声明 */
        void printBook( struct Books book );
        int main( )
        {
           struct Books Book1;        /* 声明 Book1，类型为 Books */
           struct Books Book2;        /* 声明 Book2，类型为 Books */
         
           /* Book1 详述 */
           strcpy( Book1.title, "C Programming");
           strcpy( Book1.author, "Nuha Ali"); 
           strcpy( Book1.subject, "C Programming Tutorial");
           Book1.book_id = 6495407;
         
           /* Book2 详述 */
           strcpy( Book2.title, "Telecom Billing");
           strcpy( Book2.author, "Zara Ali");
           strcpy( Book2.subject, "Telecom Billing Tutorial");
           Book2.book_id = 6495700;
         
           /* 输出 Book1 信息 */
           printBook( Book1 );
         
           /* 输出 Book2 信息 */
           printBook( Book2 );
         
           return 0;
        }
        void printBook( struct Books book )
        {
           printf( "Book title : %s\n", book.title);
           printf( "Book author : %s\n", book.author);
           printf( "Book subject : %s\n", book.subject);
           printf( "Book book_id : %d\n", book.book_id);
        }
    
    当上面的代码被编译和执行时，它会产生下列结果：
    
        Book title : C Programming
        Book author : Nuha Ali
        Book subject : C Programming Tutorial
        Book book_id : 6495407
        Book title : Telecom Billing
        Book author : Zara Ali
        Book subject : Telecom Billing Tutorial
        Book book_id : 6495700
    
    ### 指向结构的指针
    
    您可以定义指向结构的指针，方式与定义指向其他类型变量的指针相似，如下所示：
    
        struct Books *struct_pointer;
    
    现在，您可以在上述定义的指针变量中存储结构变量的地址。为了查找结构变量的地址，请把 & 运算符放在结构名称的前面，如下所示：
    
        struct_pointer = &Book1;
    
    为了使用指向该结构的指针访问结构的成员，您必须使用 -> 运算符，如下所示：
    
        struct_pointer->title;
    
    让我们使用结构指针来重写上面的实例，这将有助于您理解结构指针的概念：
    
    **实例**
    
        #include &lt;stdio.h>
        #include &lt;string.h>
         
        struct Books
        {
           char  title[50];
           char  author[50];
           char  subject[100];
           int   book_id;
        };
         
        /* 函数声明 */
        void printBook( struct Books *book );
        int main( )
        {
           struct Books Book1;        /* 声明 Book1，类型为 Books */
           struct Books Book2;        /* 声明 Book2，类型为 Books */
         
           /* Book1 详述 */
           strcpy( Book1.title, "C Programming");
           strcpy( Book1.author, "Nuha Ali"); 
           strcpy( Book1.subject, "C Programming Tutorial");
           Book1.book_id = 6495407;
         
           /* Book2 详述 */
           strcpy( Book2.title, "Telecom Billing");
           strcpy( Book2.author, "Zara Ali");
           strcpy( Book2.subject, "Telecom Billing Tutorial");
           Book2.book_id = 6495700;
         
           /* 通过传 Book1 的地址来输出 Book1 信息 */
           printBook( &Book1 );
         
           /* 通过传 Book2 的地址来输出 Book2 信息 */
           printBook( &Book2 );
         
           return 0;
        }
        void printBook( struct Books *book )
        {
           printf( "Book title : %s\n", book->title);
           printf( "Book author : %s\n", book->author);
           printf( "Book subject : %s\n", book->subject);
           printf( "Book book_id : %d\n", book->book_id);
        }
    
    当上面的代码被编译和执行时，它会产生下列结果：
    
        Book title : C Programming
        Book author : Nuha Ali
        Book subject : C Programming Tutorial
        Book book_id : 6495407
        Book title : Telecom Billing
        Book author : Zara Ali
        Book subject : Telecom Billing Tutorial
        Book book_id : 6495700
    
    ## C typedef
    C 语言提供了 typedef 关键字，您可以使用它来为类型取一个新的名字。下面的实例为单字节数字定义了一个术语 BYTE：
    
        typedef unsigned char BYTE;
    
    在这个类型定义之后，标识符 BYTE 可作为类型 unsigned char 的缩写，例如：
    
        BYTE  b1, b2;
    
    按照惯例，定义时会大写字母，以便提醒用户类型名称是一个象征性的缩写，但您也可以使用小写字母，如下：
    
        typedef unsigned char byte;
    
    您也可以使用 typedef 来为用户自定义的数据类型取一个新的名字。例如，您可以对结构体使用 typedef 来定义一个新的数据类型名字，然后使用这个新的数据类型来直接定义结构变量，如下：
    
    **实例**
    
        #include &lt;stdio.h>
        #include &lt;string.h>
         
        typedef struct Books
        {
           char  title[50];
           char  author[50];
           char  subject[100];
           int   book_id;
        } Book;
         
        int main( )
        {
           Book book;
         
           strcpy( book.title, "C 教程");
           strcpy( book.author, "Runoob"); 
           strcpy( book.subject, "编程语言");
           book.book_id = 12345;
         
           printf( "书标题 : %s\n", book.title);  // out : 书标题 : C 教程
           printf( "书作者 : %s\n", book.author);  // out : 书作者 : Runoob
           printf( "书类目 : %s\n", book.subject);  // out : 书类目 : 编程语言
           printf( "书 ID : %d\n", book.book_id);  // out : 书 ID : 12345
         
           return 0;
        }
    
    ### typedef vs #define
    
         #define 是 C 指令，用于为各种数据类型定义别名，与 typedef 类似，但是它们有以下几点不同：
    
    - typedef 仅限于为类型定义符号名称，#define 不仅可以为类型定义别名，也能为数值定义别名，比如您可以定义 1 为 ONE。
    - typedef 是由编译器执行解释的，#define 语句是由预编译器进行处理的。
    
    下面是 #define 的最简单的用法：
    
    **实例**
    
        #include <stdio.h>
         
        #define TRUE  1
        #define FALSE 0
         
        int main( )
        {
           printf( "TRUE 的值: %d\n", TRUE);  // out : TRUE 的值: 1
           printf( "FALSE 的值: %d\n", FALSE);  // out : FALSE 的值: 0
         
           return 0;
        }
    
    ## C 共用体
    
    共用体是一种特殊的数据类型，允许您在相同的内存位置存储不同的数据类型。您可以定义一个带有多成员的共用体，但是任何时候只能有一个成员带有值。共用体提供了一种使用相同的内存位置的有效方式。
    
    ### 定义共用体
    
    为了定义共用体，您必须使用 union 语句，方式与定义结构类似。union 语句定义了一个新的数据类型，带有多个成员。union 语句的格式如下：
    
        union [union tag]
        {
           member definition;
           member definition;
           ...
           member definition;
        } [one or more union variables];
    
    union tag 是可选的，每个 member definition 是标准的变量定义，比如 int i; 或者 float f; 或者其他有效的变量定义。在共用体定义的末尾，最后一个分号之前，您可以指定一个或多个共用体变量，这是可选的。下面定义一个名为 Data 的共用体类型，有三个成员 i、f 和 str
    
        union Data
        {
           int i;
           float f;
           char  str[20];
        } data;
    
    现在，Data 类型的变量可以存储一个整数、一个浮点数，或者一个字符串。这意味着一个变量（相同的内存位置）可以存储多个多种类型的数据。您可以根据需要在一个共用体内使用任何内置的或者用户自定义的数据类型。
    共用体占用的内存应足够存储共用体中最大的成员。例如，在上面的实例中，Data 将占用 20 个字节的内存空间，因为在各个成员中，字符串所占用的空间是最大的。下面的实例将显示上面的共用体占用的总内存大小：
    
    **实例**
    
        #include &lt;stdio.h>
        #include &lt;string.h>
         
        union Data
        {
           int i;
           float f;
           char  str[20];
        };
         
        int main( )
        {
           union Data data;        
         
           printf( "Memory size occupied by data : %d\n", sizeof(data));  // out : Memory size occupied by data : 20
         
           return 0;
        }
    
    ### 访问共用体成员
    
    为了访问共用体的成员，我们使用成员访问运算符（.）。成员访问运算符是共用体变量名称和我们要访问的共用体成员之间的一个句号。您可以使用 union 关键字来定义共用体类型的变量。下面的实例演示了共用体的用法：
    
    **实例**
    
        #include &lt;stdio.h>
        #include &lt;string.h>
         
        union Data
        {
           int i;
           float f;
           char  str[20];
        };
         
        int main( )
        {
           union Data data;        
         
           data.i = 10;
           data.f = 220.5;
           strcpy( data.str, "C Programming");
         
           printf( "data.i : %d\n", data.i);  // out : data.i : 1917853763
           printf( "data.f : %f\n", data.f);  // out : data.f : 4122360580327794900000000000000.000000
           printf( "data.str : %s\n", data.str);  // out : data.str : C Programming
         
           return 0;
        }
    
    在这里，我们可以看到共用体的 i 和 f 成员的值有损坏，因为最后赋给变量的值占用了内存位置，这也是 str 成员能够完好输出的原因。现在让我们再来看一个相同的实例，这次我们在同一时间只使用一个变量，这也演示了使用共用体的主要目的
    
    **实例**
    
        #include &lt;stdio.h>
        #include &lt;string.h>
         
        union Data
        {
           int i;
           float f;
           char  str[20];
        };
         
        int main( )
        {
           union Data data;        
         
           data.i = 10;
           printf( "data.i : %d\n", data.i);  // out : data.i : 10
           
           data.f = 220.5;
           printf( "data.f : %f\n", data.f);  // out : data.f : 220.500000
           
           strcpy( data.str, "C Programming");
           printf( "data.str : %s\n", data.str);  // out : data.str : C Programming
         
           return 0;
        }
    
    在这里，所有的成员都能完好输出，因为同一时间只用到一个成员。
    `
}