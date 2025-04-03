function userAuth(req,res,next){
    const userid="xyz";
    const isAuthentication=userid==='xyz1';
    if(isAuthentication)
    {
        next();
    }
    else{
        res.status(200).send("Authentication Failed");
    }
}
module.exports={userAuth}