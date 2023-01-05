const vistaPrincipal = (req,res)=>{
    res.render('home')
}

const vistatables = (req,res)=>{
    res.render('tables')
}

const vistaNotifications = (req,res)=>{
    res.render('notifications')
}

module.exports = {
    vistaPrincipal,
    vistatables,
    vistaNotifications
}