body {
    font-family: Arial, sans-serif;
    background-color: #e0f7fa;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #00796b;
}

header {
    background-color: #00796b;
    color: white;
    padding: 20px;
    width: 100%;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

header h1 {
    margin: 0;
    font-size: 2em;
}

header button {
    background-color: #00bcd4;
    border: none;
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
    margin-top: 10px;
    border-radius: 4px;
}

header button:hover {
    background-color: #008ba3;
}

main {
    width: 100%;
    max-width: 600px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#gameArea {
    position: relative;
    width: 100%;
    height: 400px;
    background-color: #fff;
    border: 2px solid #00796b;
    overflow: hidden;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

#basket {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
    background-color: #00796b;
    border-radius: 4px;
}

.coin {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: gold;
    border-radius: 50%;
}

#scoreboard {
    text-align: center;
}

#scoreboard p {
    margin: 10px 0;
    font-size: 1.2em;
}

footer {
    margin-top: 20px;
    font-size: 1.2em;
    color: #00796b;
}

@media (max-width: 600px) {
    main {
        padding: 10px;
    }

    header h1 {
        font-size: 1.5em;
    }

    header button {
        font-size: 0.9em;
        padding: 8px 16px;
    }

    #gameArea {
        height: 300px;
    }
}
