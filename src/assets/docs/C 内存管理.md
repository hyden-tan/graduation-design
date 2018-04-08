# C �ڴ����
���½����� C �еĶ�̬�ڴ����C ����Ϊ�ڴ�ķ���͹����ṩ�˼�����������Щ���������� &lt;stdlib.h> ͷ�ļ����ҵ���

- **void *calloc(int num, int size);**
���ڴ��ж�̬�ط��� num ������Ϊ size �������ռ䣬����ÿһ���ֽڶ���ʼ��Ϊ 0���������Ľ���Ƿ����� num*size ���ֽڳ��ȵ��ڴ�ռ䣬����ÿ���ֽڵ�ֵ����0��
- **void free(void *address); **
�ú����ͷ� address ��ָ����ڴ��,�ͷŵ��Ƕ�̬������ڴ�ռ䡣
- **void *malloc(int num); **
�ڶ�������һ��ָ����С���ڴ�ռ䣬����������ݡ�����ڴ�ռ��ں���ִ����ɺ󲻻ᱻ��ʼ�������ǵ�ֵ��δ֪�ġ�
- **void *realloc(void *address, int newsize); **
�ú������·����ڴ棬���ڴ���չ�� newsize��

## ��̬�����ڴ�
���ʱ�������Ԥ��֪������Ĵ�С����ô��������ʱ�ͱȽ����ס����磬һ���洢���������飬��������� 100 ���ַ������������Զ������飬������ʾ��

    char name[100];

���ǣ������Ԥ�Ȳ�֪����Ҫ�洢���ı����ȣ���������洢�й�һ���������ϸ�����������������Ҫ����һ��ָ�룬��ָ��ָ��δ������ѧ�ڴ��С���ַ��������ٸ��������������ڴ棬������ʾ��

    #include &lt;stdio.h>
    #include &lt;stdlib.h>
    #include &lt;string.h>
    
    int main()
    {
       char name[100];
       char *description;
    
       strcpy(name, "Zara Ali");
    
       /* ��̬�����ڴ� */
       description = malloc( 200 * sizeof(char) );
       if( description == NULL )
       {
          fprintf(stderr, "Error - unable to allocate required memory\n");
       }
       else
       {
          strcpy( description, "Zara ali a DPS student in class 10th");
       }
       printf("Name = %s\n", name );
       printf("Description: %s\n", description );
    }

������Ĵ��뱻�����ִ��ʱ������������н����

    Name = Zara Ali
    Description: Zara ali a DPS student in class 10th

����ĳ���Ҳ����ʹ�� calloc() ����д��ֻ��Ҫ�� malloc �滻Ϊ calloc ���ɣ�������ʾ��

    calloc(200, sizeof(char));

����̬�����ڴ�ʱ��������ȫ����Ȩ�����Դ����κδ�С��ֵ������ЩԤ�ȶ����˴�С�����飬һ���������޷��ı��С��

## ���µ����ڴ�Ĵ�С���ͷ��ڴ�

�������˳�ʱ������ϵͳ���Զ��ͷ����з����������ڴ棬���ǣ��������ڲ���Ҫ�ڴ�ʱ����Ӧ�õ��ú��� free() ���ͷ��ڴ档
���ߣ�������ͨ�����ú��� realloc() �����ӻ�����ѷ�����ڴ��Ĵ�С��������ʹ�� realloc() �� free() �������ٴβ鿴�����ʵ����

    #include &lt;stdio.h>
    #include &lt;stdlib.h>
    #include &lt;string.h>
    
    int main()
    {
       char name[100];
       char *description;
    
       strcpy(name, "Zara Ali");
    
       /* ��̬�����ڴ� */
       description = malloc( 30 * sizeof(char) );
       if( description == NULL )
       {
          fprintf(stderr, "Error - unable to allocate required memory\n");
       }
       else
       {
          strcpy( description, "Zara ali a DPS student.");
       }
       /* ��������Ҫ�洢�����������Ϣ */
       description = realloc( description, 100 * sizeof(char) );
       if( description == NULL )
       {
          fprintf(stderr, "Error - unable to allocate required memory\n");
       }
       else
       {
          strcat( description, "She is in class 10th");
       }
       
       printf("Name = %s\n", name );
       printf("Description: %s\n", description );
    
       /* ʹ�� free() �����ͷ��ڴ� */
       free(description);
    }

������Ĵ��뱻�����ִ��ʱ������������н����

    Name = Zara Ali
    Description: Zara ali a DPS student.She is in class 10th

�����Գ���һ�²����·��������ڴ棬strcat() ����������һ��������Ϊ�洢 description ʱ���õ��ڴ治�㡣
