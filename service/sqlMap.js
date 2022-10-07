router.post('/login', (req, res) => {
    var sql_name = $sql.user.select_name;
    // var sql_password = $sql.user.select_password;
    var params = req.body;
    if (params.name) {
        sql_name += "where username ='"+ params.name +"'";
    }
    var keywords = JSON.parse(Object.keys(params)[0]);
    conn.query(sql_name, params.name, function(err, result) {
        if (err) {
        }
        if (result[0] === undefined) {
            res.send('-1')   //查询不出username，data 返回-1
        } else {
            var resultArray = result[0];
            if(resultArray.password === keywords.password) {
                jsonWrite(res, result);
            } else {
                res.send('0')   //username
            }
        }
    })
});