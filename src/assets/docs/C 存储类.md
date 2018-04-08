# C �洢��

�洢�ඨ�� C �����б���/�����ķ�Χ���ɼ��ԣ����������ڡ���Щ˵�������������������ε�����֮ǰ�������г� C �����п��õĴ洢�ࣺ
- auto
- register
- static
- extern

## auto �洢��

auto �洢�������оֲ�����Ĭ�ϵĴ洢�ࡣ

    {
       int mount;
       auto int month;
    }

�����ʵ������������������ͬ�洢��ı�����auto ֻ�����ں����ڣ��� auto ֻ�����ξֲ�������

## register �洢��

register �洢�����ڶ���洢�ڼĴ����ж����� RAM �еľֲ�����������ζ�ű��������ߴ���ڼĴ����Ĵ�С��ͨ����һ���ʣ����Ҳ��ܶ���Ӧ��һԪ�� '&' ���������Ϊ��û���ڴ�λ�ã���

    {
       register int  miles;
    }

�Ĵ���ֻ������Ҫ���ٷ��ʵı������������������Ӧע����ǣ����� 'register' ������ζ�ű��������洢�ڼĴ����У�����ζ�ű������ܴ洢�ڼĴ����У���ȡ����Ӳ����ʵ�ֵ����ơ�

## static �洢��

static �洢��ָʾ�������ڳ�������������ڱ��־ֲ������Ĵ��ڣ�������Ҫ��ÿ����������뿪������ʱ���д��������١���ˣ�ʹ�� static ���ξֲ����������ں�������֮�䱣�־ֲ�������ֵ��
static ���η�Ҳ����Ӧ����ȫ�ֱ������� static ����ȫ�ֱ���ʱ����ʹ���������������������������ļ��ڡ�
static ��ȫ�ֱ�����Ĭ�ϴ洢�࣬������������ (count �� road) ����һ�� static �洢�ࡣ

    #include &lt;stdio.h>
    static int Count=10;
    int Road=10;
    void main()
    {
        printf("%d\n", Count);  // out  : 10
        printf("%d\n", Road);   // out  : 10
     }


**ʵ��**

    #include &lt;stdio.h>
     
    /* �������� */
    void func1(void);
     
    static int count=10;        /* ȫ�ֱ��� - static ��Ĭ�ϵ� */
     
    int main()
    {
      while (count--) {
          func1();
      }
      return 0;
    }
     
    void func1(void)
    {
    /* 'thingy' �� 'func1' �ľֲ����� - ֻ��ʼ��һ��
     * ÿ�ε��ú��� 'func1' 'thingy' ֵ���ᱻ���á�
     */                
      static int thingy=5;
      thingy++;
      printf(" thingy Ϊ %d �� count Ϊ %d\n", thingy, count);
    }

ʵ���� count ��Ϊȫ�ֱ��������ں�����ʹ�ã�thingy ʹ�� static ���κ󣬲�����ÿ�ε���ʱ���á�
���������ڻ��޷�������ʵ������Ϊ���Ѿ�ʹ���˺�����ȫ�ֱ���������������ĿǰΪֹ��û���н��⡣��ʹ�����ڲ�����ȫ��⣬Ҳû�й�ϵ���������½����ǻ���ϸ���⡣������Ĵ��뱻�����ִ��ʱ������������н����

     thingy Ϊ 6 �� count Ϊ 9
     thingy Ϊ 7 �� count Ϊ 8
     thingy Ϊ 8 �� count Ϊ 7
     thingy Ϊ 9 �� count Ϊ 6
     thingy Ϊ 10 �� count Ϊ 5
     thingy Ϊ 11 �� count Ϊ 4
     thingy Ϊ 12 �� count Ϊ 3
     thingy Ϊ 13 �� count Ϊ 2
     thingy Ϊ 14 �� count Ϊ 1
     thingy Ϊ 15 �� count Ϊ 0

## extern �洢��
extern �洢�������ṩһ��ȫ�ֱ��������ã�ȫ�ֱ��������еĳ����ļ����ǿɼ��ġ�����ʹ�� 'extern' ʱ�������޷���ʼ���ı�������ѱ�����ָ��һ��֮ǰ������Ĵ洢λ�á�
�����ж���ļ��Ҷ�����һ�������������ļ���ʹ�õ�ȫ�ֱ�������ʱ�������������ļ���ʹ�� extern ���õ��Ѷ���ı������������á�������ô��⣬extern ����������һ���ļ�������һ��ȫ�ֱ���������
extern ���η�ͨ�����ڵ������������ļ�������ͬ��ȫ�ֱ���������ʱ��������ʾ��

**��һ���ļ���main.c**

**ʵ��**

    #include &lt;stdio.h>
     
    int count ;
    extern void write_extern();
     
    int main()
    {
       count = 5;
       write_extern();
    }

**�ڶ����ļ���support.c**

**ʵ��**

    #include &lt;stdio.h>
     
    extern int count;
     
    void write_extern(void)
    {
       printf("count is %d\n", count);   //  out :  count is 5
    }

������ڶ����ļ��е� extern �ؼ������������Ѿ��ڵ�һ���ļ� main.c �ж���� count������ �������������ļ���������ʾ��

    $ gcc main.c support.c

������ a.out ��ִ�г��򣬵�����ִ��ʱ������������н����

    count is 5

