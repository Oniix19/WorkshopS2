import styled from "styled-components";

export const StyleP = styled.div`
    /* background-color: aqua; */
    display: flex;
    font-family: roboto;
    overflow-x: hidden;

    .card{
        background-color: white;
        padding-top: 2.5%;
        margin: 5% 0;
        box-shadow: 0px 2px 3px silver;
        width: 600px;
        justify-content: space-between;
    } 
    .cardTitle{
        color: yellowgreen;
        margin: 2% 5% 0 5%;
        display: flex;
        justify-content: space-between;
    }
    .btnFav{
        background-color: transparent;
        border: 0;
    }
    .cardDes{
        margin: 2% 5% 0 5%;
    }
    .cardSpe{
        color: yellowgreen;
        margin: 2% 5% 0 5%;
    }
    .cardSeg{
        display: flex;
        align-items: center;
        margin: 0.5% 5% 0.5% 5%;
    }
    .cardTop{
        display: flex;
        align-items: center;
        padding: 0 0 2% 0;
        margin: 0.5% 5% 0 5%;
    }
    .cc{
        color: dimgray;
        padding: 0 0 .4% 0;
        margin: 0.5% 0 0 2%;
    }



    .filDiv1,.filDiv2{
        padding-right: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .filH2{
        padding: 0;
        margin: 0;
    }
    .filBtn{
        font-size: 14px;
        margin: 15px 0;
        border: none;
        background: transparent;
        font-weight: 700;
        color: yellowgreen;
    }
    .filInput{
        height: 25px;
        border-radius: 15px 
    }
    .search{
        border-radius: 15px;
        background: yellowgreen;
        font-size: 25px;
        padding: 5px;
        color: white;
    }




    .dateDiv{
        display: flex;
        overflow-x: scroll;
        max-width: 900px;
    }
    .dateCont{
        margin: 0 10px;
    }
    .dateBtn{
        height: 20px;
        width: 130px;
        border: none;
        background: transparent;
    }
    .dateBtn:hover{
        background-color: yellowgreen;
        border-radius: 15px;
        color: white;
    }
`