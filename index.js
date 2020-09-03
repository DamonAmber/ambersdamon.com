var app = new Vue({
    el: '#app',
    data: {
        language: 'English',
        languagePack: {
            English: {
                webName: 'Amber\'s Damon',
                menu: [
                    {
                        name: 'Photographic Works',
                        href: './pages/PhotographicWorks/index.html'
                    },
                    {
                        name: 'Video Logs',
                        href: './pages/videoLog/index.html'
                    },
                    {
                        name: 'Articles',
                        href: './pages/Articles/index.html'
                    },
                    {
                        name: 'Webpage Demo',
                        href: './index.html'
                    },
                    {
                        name: 'Paintings',
                        href: './index.html'
                    }
                ]
            },
            Chinese: {
                webName: 'Amber\'s Damon',
                menu: [
                    {
                        name: '摄影作品',
                        href: './pages/PhotographicWorks/index.html'
                    },
                    {
                        name: '视频',
                        href: './pages/videoLog/index.html'
                    },
                    {
                        name: '文章',
                        href: './pages/Articles/index.html'
                    },
                    {
                        name: '网站小样',
                        href: './index.html'
                    },
                    {
                        name: '绘画作品',
                        href: './index.html'
                    }
                ]
            },
        }
    },
    methods: {
        changeLanguage: (language) => {
            app.language = language
        }
    }
})