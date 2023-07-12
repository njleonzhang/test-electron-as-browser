module.exports = api => {
    api.cache(true);

    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    targets: {
                        electron: '20'
                    }
                }
            ],
            [
                '@babel/preset-react'
            ]
        ]
    }
}