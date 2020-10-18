const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage.js')

Database.then(async db => {

    const dataToInsert = {
        lat: "-27.222637",
        lng: "-49.6549961",
        name: 'Lar dos meninos',
        about: 'Presta assitência a pessoas que se encontre em situação de risco e/ou vulnerabilidade social.',
        whatsapp: '910189577',
        images: [
            "https://images.unsplash.com/photo-1576025773492-cc2eb828c42a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1576043005963-f4b2a8d1195d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1597791366640-e91489aaf430?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1602984689185-17bb08df694d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1597095540293-b184e2b0d044?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1562790519-2e040476a0c7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
    }

    // insert data on table
    await saveOrphanage(db, dataToInsert);

    //query data on table
    //const selectedOrphaneges = await db.all(`SELECT * FROM orphanages;`)
    //console.log(selectedOrphaneges);

    //query data on table by id
    //const orphanage = await db.all("SELECT * FROM orphanages WHERE id='3'");
    //console.log(orphanage);

    //delete data
    //await db.run("DELETE FROM orphanages WHERE id =10000")
})