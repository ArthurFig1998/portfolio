const superman = 
      {
          name: 'Superman',
          'real name': 'Clark Kent',
          height: 185, ///in cm///
          weight: 215,
          hero: true,
          villain: false,
          allies: ['Batman', 'Supergirl', 'Flash', 'Green Martian', 'Fire Storm'],
          fly()
          {
              return 'To the infinity... and beyond!';
          }
      };
const flash = 
      {
          name: 'The Flash',
          'real name': 'Bartholomew Henry Allen',
          height: 180, ///in cm///
          weight: 190,
          hero: true,
          villain: false,
          allies: ['Superman', 'Vibe', 'Killer Frost', 'Jesse Quick', 'Kid Flash', 'Elongated Man'],
          run()
          {
                return 'Run, Barry... Run!';
          }
      }



    console.log(superman.name);
    console.log(superman["real" + " " + "name"]); 
    'city' in superman;
    superman.city !== undefined;
    superman.hasOwnProperty('city');

    for (const key in superman)
    {
        console.log(key + ": " + superman[key]);
    }

    for (const key of Object.keys(superman))
    {
        console.log(key);
    }
    for (const value of Object.values(superman))
    {
        console.log(value);
    }
    delete superman.fly;

    console.log(flash.name);
    console.log(flash["real" + " " + "name"]); 
    'city' in flash;
    flash.city = 'Central City';
    flash.hasOwnProperty('city');

    for (const key in flash)
    {
        console.log(key + ": " + flash[key]);
    }

    for (const key of Object.keys(flash))
    {
        console.log(key);
    }
    for (const value of Object.values(flash))
    {
        console.log(value);
    }
    delete flash.run;

    const JLeague =
          {
              superman:
              {
                  realName: 'Clark Kent'
              },
              batman:
              {
                  realName: 'Bruce Wayne'
              },
              wonderWoman:
              {
                  realName: 'Diana Prince'
              },
              flash:
              {
                  realName: 'Barry Allen'
              },
              aquaman:
              {
                  realName: 'Arthur Curry'
              },
          };