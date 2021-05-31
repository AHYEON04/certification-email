const espress = require('express');

const router = express.Router();

router.use((req, res, next)=>{
    res.locals.user = null;
    res.locals.followCount = 0;
    res.locals.followingCount = 0;
    res.locals.followerIdList = [];
    next();
});

router.get('/profile',(req, res)=>{
    res.render('profile',{title: '내 정보'});
})

router.get('/join',(req, res)=>{
    res.render('join',{title:'회원가입'});
});

router.get('/',(req, res)=>{
    const twits =[];
    res.render('main',{
        title:'',
        twits, 
    });
});

modules.exprot = router;