var jeux = true;
        var Etat = "";
        var k = 0;
        var tab = ["images/X.png","images/O.png"]
        var table = [['a','b','c'],['d','e','f'],['h','i','g']]
        $(document).ready(function(){
            $("#Lancer").click(function(){
                if($("#player1").val() != "" && $("#player2").val() != "")    
                    {
                        k = 0;
                        $("table").removeAttr("class")
                        $("#player1").attr("disabled","true")
                        $("#player2").attr("disabled","true")
                        $("#choix1").attr("disabled","true")
                        $("#choix2").attr("disabled","true")
                        $("#jouerPlayer1").attr("disabled","true")
                        $("#jouerPlayer2").attr("disabled","true")
                        $("img").attr("src","images/black.png")
                        $(".l1").removeAttr("disabled")
                        $(".l2").removeAttr("disabled")
                        $(".l3").removeAttr("disabled")
                        $("#Lancer").attr("disabled","true")
                        $("#container1").attr("class","container1")
                        table = [['a','b','c'],['d','e','f'],['h','i','g']]
                        if($("#choix1").is(":checked"))
                            {
                                playerX= $("#player1").val()
                                playerO= $("#player2").val()
                                if ( $("#jouerPlayer1").is(":checked") )
                                    {
                                        Etat = true;
                                    }
                                else
                                    {
                                        Etat = false;
                                    }
                            }
                        else
                            {
                                playerX= $("#player2").val()
                                playerO= $("#player1").val()
                                if ( $("#jouerPlayer1").is(":checked") )
                                    {
                                        Etat = false;
                                    }
                                else
                                    {
                                        Etat = true;
                                    }
                            }
                    }
            })
            $("button").click(function(){
                        if ( Etat == true)
                            {
                                if ( $(this).find("img").attr("src") == "images/black.png" )
                                    {
                                $(this).find("img").attr("src",tab[0])
                                Etat = false
                                    if($(this).attr("class") == "l1")
                                        {
                                            if($(this).attr("id") == "p1")
                                                {
                                                    table[0].splice(0,1,"X")
                                                    
                                                }
                                            if($(this).attr("id") == "p2")
                                                {
                                                    table[0].splice(1,1,"X")
                                                    
                                                }
                                            if($(this).attr("id") == "p3")
                                                {
                                                    table[0].splice(2,1,"X")
                                                    
                                                }
                                        }
                                    if($(this).attr("class") == "l2")
                                        {
                                            if($(this).attr("id") == "p4")
                                                {
                                                    table[1].splice(0,1,"X")
                                                    
                                                }
                                            if($(this).attr("id") == "p5")
                                                {
                                                    table[1].splice(1,1,"X")
                                                    
                                                }
                                            if($(this).attr("id") == "p6")
                                                {
                                                    table[1].splice(2,1,"X")
                                                    
                                                }
                                        }
                                    if($(this).attr("class") == "l3")
                                        {
                                            if($(this).attr("id") == "p7")
                                                {
                                                    table[2].splice(0,1,"X")
                                                    
                                                }
                                            if($(this).attr("id") == "p8")
                                                {
                                                    table[2].splice(1,1,"X")
                                                    
                                                }
                                            if($(this).attr("id") == "p9")
                                                {
                                                    table[2].splice(2,1,"X")
                                                    
                                                }
                                        }
                                for(i=0;i<3 ; i++)
                                    {
                                        var jeux1 = true
                                        for(j=0;j<2 ; j++)
                                            {
                                                if(table[i][j] != table[i][j+1] )
                                                    {
                                                        jeux1 = false    
                                                    }
                                            }
                                        if(jeux1 == true)
                                                    {
                                                        i = 5
                                                    }    
                                    }
                                for(i=0;i<3 ; i++)
                                    {
                                        var jeux2 = true
                                        for(j=0;j<2 ; j++)
                                            {
                                                if(table[j][i] != table[j+1][i] )
                                                    {
                                                        jeux2 = false    
                                                    }
                                            }
                                        if(jeux2 == true)
                                                    {
                                                        i = 5
                                                    }    
                                    }
                                var jeux3 = true
                                for(i=0;i<2 ; i++)
                                    {
                                            if(table[i][i] != table[i+1][i+1] )
                                                    {
                                                        jeux3 = false    
                                                    }  
                                    }
                                var jeux4 = true
                                j = 2
                                for(i=0;i<2 ; i++)
                                    {
                                            if(table[i][j] != table[i+1][j-1] )
                                                    {
                                                        jeux4 = false    
                                                    } 
                                            j-- 
                                    }
                                k++
                                if(jeux1 == true || jeux2 == true || jeux3 == true || jeux4 == true)
                                        {
                                            $(".l1").attr("disabled","true")
                                            $(".l2").attr("disabled","true")
                                            $(".l3").attr("disabled","true")
                                            $(".modal").css("display","block")
                                            $("#Aficher").text("Player "+ playerX +" You are winner !!! ")
                                            $("#Lancer").removeAttr("disabled")
                                            $("table").attr("class","opa")
                                            $("#container1").removeAttr("class")
                                        }
                                if(k==9) 
                                    {
                                        $(".modal").css("display","block")
                                        $("#Aficher").text("A draw, No one is a winner !!!")
                                        $("#Lancer").removeAttr("disabled")
                                        $("table").attr("class","opa")
                                        $("#container1").removeAttr("class")
                                    } 
                                }         
                            }
                        else 
                            {
                                if ( $(this).find("img").attr("src") == "images/black.png" )
                                    { 

                                $(this).find("img").attr("src",tab[1])
                                Etat = true
                                    if($(this).attr("class") == "l1")
                                        {
                                            if($(this).attr("id") == "p1")
                                                {
                                                    table[0].splice(0,1,"O")
                                                    
                                                }
                                            if($(this).attr("id") == "p2")
                                                {
                                                    table[0].splice(1,1,"O")
                                                    
                                                }
                                            if($(this).attr("id") == "p3")
                                                {
                                                    table[0].splice(2,1,"O")
                                                    
                                                }
                                        }
                                    if($(this).attr("class") == "l2")
                                        {
                                            if($(this).attr("id") == "p4")
                                                {
                                                    table[1].splice(0,1,"O")
                                                    
                                                }
                                            if($(this).attr("id") == "p5")
                                                {
                                                    table[1].splice(1,1,"O")
                                                    
                                                }
                                            if($(this).attr("id") == "p6")
                                                {
                                                    table[1].splice(2,1,"O")
                                                    
                                                }
                                        }
                                    if($(this).attr("class") == "l3")
                                        {
                                            if($(this).attr("id") == "p7")
                                                {
                                                    table[2].splice(0,1,"O")
                                                    
                                                }
                                            if($(this).attr("id") == "p8")
                                                {
                                                    table[2].splice(1,1,"O")
                                                    
                                                }
                                            if($(this).attr("id") == "p9")
                                                {
                                                    table[2].splice(2,1,"O")
                                                    
                                                }
                                        }
                                for(i=0;i<3 ; i++)
                                    {
                                        var jeux1 = true
                                        for(j=0;j<2 ; j++)
                                            {
                                                if(table[i][j] != table[i][j+1] )
                                                    {
                                                        jeux1 = false    
                                                    }
                                            }
                                        if(jeux1 == true)
                                                    {
                                                        i = 5
                                                    }    
                                    }
                                for(i=0;i<3 ; i++)
                                    {
                                        var jeux2 = true
                                        for(j=0;j<2 ; j++)
                                            {
                                                if(table[j][i] != table[j+1][i] )
                                                    {
                                                        jeux2 = false    
                                                    }
                                            }
                                        if(jeux2 == true)
                                                    {
                                                        i = 5
                                                    }    
                                    }
                                var jeux3 = true
                                for(i=0;i<2 ; i++)
                                    {
                                            if(table[i][i] != table[i+1][i+1] )
                                                    {
                                                        jeux3 = false    
                                                    }  
                                    }
                                var jeux4 = true
                                j = 2
                                for(i=0;i<2 ; i++)
                                    {
                                            if(table[i][j] != table[i+1][j-1] )
                                                    {
                                                        jeux4 = false    
                                                    } 
                                            j-- 
                                    }
                                k++
                                if(jeux1 == true || jeux2 == true || jeux3 == true || jeux4 == true)
                                        {
                                            $(".l1").attr("disabled","true")
                                            $(".l2").attr("disabled","true")
                                            $(".l3").attr("disabled","true")
                                            $(".modal").css("display","block")
                                            $("#Aficher").text("Player "+ playerO +" You are winner !!! ")
                                            $("#Lancer").removeAttr("disabled")
                                            $("table").attr("class","opa")
                                            $("#container1").removeAttr("class")
                                        }  
                                if(k==9) 
                                    {
                                        $(".modal").css("display","block")
                                        $("#Aficher").text("A draw, No one is a winner !!!")
                                        $("#Lancer").removeAttr("disabled")
                                        $("table").attr("class","opa")
                                        $("#container1").removeAttr("class")
                                    }  
                                }        
                            }
            })
        })