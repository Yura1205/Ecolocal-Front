import React from 'react'


const stylesButton = {
    buttonCardsP: {
        display: "box",
        height: "50px",
        width: "100px",
        backgroundColor: "#006700 ",
        marginBottom: "5%",
        marginTop: "5%",
        borderRadius: "10px",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
      },
}
export const ButtonCardsP = ({fnSaberMas}) => {
  return (
    <button type='button' className="buttonCardsP" style={stylesButton.buttonCardsP} onClick={fnSaberMas}>Saber más</button>
  )
}
