document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        document.body.style.display = 'block'
    } else {
        document.body.style.display = 'none'
    }
}
var app = new Vue({
    el: '#app',
    data: {
        articles: [
            {
                title: '【BerBer护肤日记】之 “八月好物推荐”',
                time: '2020-08-16',
                tags: ['护肤日记', 'BerBer'],
                type: '微信公众号文章',
                url: 'https://mp.weixin.qq.com/s/JOcJeyuFx_9NVfqnaMiK8w'
            },
            {
                title: '【BerBer护肤日记】之 “最近好物推荐”',
                time: '2020-06-23',
                tags: ['护肤日记', 'BerBer'],
                type: '微信公众号文章',
                url: 'https://mp.weixin.qq.com/s/X1LAHvLgnlbZ2ENz-XHBfg'
            },
            {
                title: '【BerBer游记】之烟花三月下篇',
                time: '2020-06-21',
                tags: ['游记', 'BerBer'],
                type: '微信公众号文章',
                url: 'https://mp.weixin.qq.com/s/YntgWvVbTg_Gwo5ZeZwf9A'
            },
            {
                title: '【BerBer游记】之烟花三月中篇',
                time: '2020-06-07',
                tags: ['游记', 'BerBer'],
                type: '微信公众号文章',
                url: 'https://mp.weixin.qq.com/s/9sSHf6MmOF2cfQ5FsEZXtQ'
            },
            {
                title: '【BerBer游记】之烟花三月上篇',
                time: '2020-06-04',
                tags: ['游记', 'BerBer'],
                type: '微信公众号文章',
                url: 'https://mp.weixin.qq.com/s/RoG6CZ-Mg9dQMy2qGDAgEw'
            }
        ]
    }
})