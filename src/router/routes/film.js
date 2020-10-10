export default{
    path:'/film',
    component:()=>
        import('@/views/film/Film'),
    redirect:'/film/NowPlaying',
    children:[
        {
            path:'nowplaying',
            component:()=>
                import('@/views/film/NowPlaying')
        },
        {
            path:'comingsoon',
            component:()=>
                import('@/views/film/ComingSoon')
        },
    ]
}