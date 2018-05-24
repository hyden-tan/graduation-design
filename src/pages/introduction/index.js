import React from 'react';
import store from '../../store';
import './index.css';
import docGif from '../../assets/images/doc.gif';
import questionsGif from '../../assets/images/questions.gif';
import editGif from '../../assets/images/edit.gif';

export default () => {
    store.setSlider(false);
    return (
        <div className="container"> 
            <h2 className="header">C易学系统探索之旅</h2>
            <p className="introduce">这是一个专为C语言初学者设计的系统，如果您刚开始学习C语言，并且正为了安装IDE环境烦恼或者正面对半天也没装好的Visual Studio头疼时，那么恭喜您，在这里有一种更简便快捷的方式学习C。下面内容将一步步带您熟悉本系统，接下来就请开始您的C语言学习之旅吧!</p>
            <p className="title">点击导航栏上的文档，您将会看到一个一篇介绍，就像下面这张图片一样，对了，这就是学习C语言的第一个程序：Hello World！它将带你打开程序世界的大门，细心的你会发现旁边有一个目录，没错，C语言各部分的内容都在里面了，跟着它，你会学完C语言全部的基础内容，剩下的就是你去探索的了！</p>
            <img className="img" src={docGif} />
            <p className="title">像点击文档一样，点击旁边的题库，您将看到本系统为您精心准备的题库，里面准备了各种题目，点击标题进去，里面有惊喜等着你！ </p>
            <img className="img" src={questionsGif}/>
            <p className="title">没错，惊喜在这儿，点击题目标题后，您将进入题目详情页面，如上所说，这是一个转为C语言初学者设计的系统，在这里您完全不用担心安装IDE的问题，话不多说，请看下面的操作吧！</p>
            <img className="img" src={editGif}/>
            <p>看到这儿已经迫不及待了想试试了吧？剩下的惊喜就由您去探索吧！</p>
        </div>
    );
}