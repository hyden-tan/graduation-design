# C�ַ���
�� C �����У��ַ���ʵ������ʹ�� null �ַ� '\0' ��ֹ��һά�ַ����顣��ˣ�һ���� null ��β���ַ���������������ַ������ַ���
����������ͳ�ʼ��������һ�� "Hello" �ַ����������������ĩβ�洢�˿��ַ��������ַ�����Ĵ�С�ȵ��� "Hello" ���ַ�����һ����

    char greeting[6] = {'H', 'e', 'l', 'l', 'o', '\0'};

���������ʼ�����������԰���������д��������䣺

    char greeting[] = "Hello";

��ʵ��������Ҫ�� null �ַ������ַ���������ĩβ��C ���������ڳ�ʼ������ʱ���Զ��� '\0' �����ַ�����ĩβ��

    #include &lt;stdio.h>
    
    int main ()
    {
       char greeting[6] = {'H', 'e', 'l', 'l', 'o', '\0'};
    
       printf("Greeting message: %s\n", greeting );  // out : Greeting message: Hello
    
       return 0;
    }

C ���д��������ַ����ĺ�����

- **strcpy(s1, s2);**
�����ַ��� s2 ���ַ��� s1��
- **strcat(s1, s2);**
�����ַ��� s2 ���ַ��� s1 ��ĩβ��
- **strlen(s1);**
�����ַ��� s1 �ĳ��ȡ�
- **strcmp(s1, s2);**
��� s1 �� s2 ����ͬ�ģ��򷵻� 0����� s1&lt;s2 �򷵻�С�� 0����� s1>s2 �򷵻ش��� 0��
- **strchr(s1, ch);**
����һ��ָ�룬ָ���ַ��� s1 ���ַ� ch �ĵ�һ�γ��ֵ�λ�á�
- **strstr(s1, s2);**
����һ��ָ�룬ָ���ַ��� s1 ���ַ��� s2 �ĵ�һ�γ��ֵ�λ�á�

�����ʵ��ʹ����������һЩ������

    #include &lt;stdio.h>
    #include &lt;string.h>
    
    int main ()
    {
       char str1[12] = "Hello";
       char str2[12] = "World";
       char str3[12];
       int  len ;
    
       /* ���� str1 �� str3 */
       strcpy(str3, str1);
       printf("strcpy( str3, str1) :  %s\n", str3 );  // out : strcpy( str3, str1) :  Hello
    
       /* ���� str1 �� str2 */
       strcat( str1, str2);
       printf("strcat( str1, str2):   %s\n", str1 );  // out : strcat( str1, str2):   HelloWorld
    
       /* ���Ӻ�str1 ���ܳ��� */
       len = strlen(str1);
       printf("strlen(str1) :  %d\n", len );  // out : strlen(str1) :  10
    
       return 0;
    }

�������� C ��׼�����ҵ������ַ�����صĺ�����