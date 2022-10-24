import useToast from "./useToast";
import { Button } from "..";

export default {
  title: "Library/Toast",
};

const quotes = `
"Frankly, my dear, I don't give a damn." - Gone With the Wind, 1939
"I'm going to make him an offer he can't refuse." - The Godfather, 1972
"You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am." - On the Waterfront, 1954
"Toto, I've got a feeling we're not in Kansas anymore." - The Wizard of Oz, 1939
"Here's looking at you, kid." - Casablanca, 1942
"Go ahead, make my day." - Sudden Impact, 1983
"All right, Mr. DeMille, I'm ready for my close-up." - Sunset Boulevard, 1950
"May the Force be with you." - Star Wars, 1977
"Fasten your seatbelts. It's going to be a bumpy night." - All About Eve, 1950
"You talking to me?" - Taxi Driver, 1976
"What we've got here is failure to communicate." - Cool Hand Luke, 1967
"I love the smell of napalm in the morning." - Apocalypse Now, 1979
"Love means never having to say you're sorry." - Love Story, 1970
"The stuff that dreams are made of." - The Maltese Falcon, 1941
"E.T. phone home." - E.T. The Extra-Terrestrial, 1982
"They call me Mister Tibbs!" - In the Heat of the Night, 1967
"Rosebud." - Citizen Kane, 1941
"Made it, Ma! Top of the world!" - White Heat, 1949
"I'm as mad as hell, and I'm not going to take this anymore!" - Network, 1976
"Louis, I think this is the beginning of a beautiful friendship." - Casablanca, 1942
"A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti." - The Silence of the Lambs, 1991
"Bond. James Bond." - Dr. No, 1962
"There's no place like home." - The Wizard of Oz, 1939
"I am big! It's the pictures that got small." - Sunset Blvd., 1950
"Show me the money!" - Jerry Maguire, 1996
"Why don't you come up sometime and see me?" - She Done Him Wrong, 1933
"I'm walking here! I'm walking here!" - Midnight Cowboy, 1969
"Play it, Sam. Play 'As Time Goes By.'" - Casablanca, 1942
"You can't handle the truth!" - A Few Good Men, 1992
"I want to be alone." - Grand Hotel, 1932
"After all, tomorrow is another day!" - Gone With the Wind, 1939
"Round up the usual suspects." - Casablanca, 1942
"I'll have what she's having." - When Harry Met Sally, 1989
"You know how to whistle, don't you, Steve? You just put your lips together and blow." - To Have and Have Not, 1944
"You're gonna need a bigger boat." - Jaws, 1975
"Badges? We ain't got no badges! We don't need no badges! I don't have to show you any stinking badges!" - The Treasure of the Sierra Madre, 1948
"I'll be back." - The Terminator, 1984
"Today, I consider myself the luckiest man on the face of the earth." - The Pride of the Yankees, 1942
"If you build it, he will come." - Field of Dreams, 1989
"Mama always said life was like a box of chocolates. You never know what you're gonna get." - Forrest Gump, 1994
"We rob banks." - Bonnie and Clyde, 1967
"Plastics." - The Graduate, 1967
"We'll always have Paris." - Casablanca, 1942
"I see dead people." - The Sixth Sense, 1999
"Stella! Hey, Stella!" - A Streetcar Named Desire, 1951
"Oh, Jerry, don't let's ask for the moon. We have the stars." - Now, Voyager, 1942
"Shane. Shane. Come back!" - Shane, 1953
"Well, nobody's perfect." - Some Like It Hot, 1959
"It's alive! It's alive!" - Frankenstein, 1931
"Houston, we have a problem." - Apollo 13, 1995
"You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?" - Dirty Harry, 1971
"You had me at ‘hello.’" - Jerry Maguire, 1996
"One morning I shot an elephant in my pajamas. How he got in my pajamas, I don't know." - Animal Crackers, 1930
"There's no crying in baseball!" - A League of Their Own, 1992
"La-dee-da, la-dee-da." - Annie Hall, 1977
"A boy's best friend is his mother." - Psycho, 1960
"Greed, for lack of a better word, is good." - Wall Street, 1987
"Keep your friends close, but your enemies closer." - The Godfather Part II, 1974
"As God is my witness, I'll never be hungry again." - Gone With the Wind, 1939
"Well, here's another nice mess you've gotten me into!" - Sons of the Desert, 1933
"Say "hello" to my little friend!" - Scarface, 1983
"What a dump." - Beyond the Forest, 1949
"Mrs. Robinson, you're trying to seduce me. Aren't you?" - The Graduate, 1967
"Gentlemen, you can't fight in here! This is the War Room!" - Dr. Strangelove, 1964
"Elementary, my dear Watson." - The Adventures of Sherlock Holmes, 1929
"Get your stinking paws off me, you damned dirty ape." - Planet of the Apes, 1968
"Of all the gin joints in all the towns in all the world, she walks into mine." - Casablanca, 1942
"Here's Johnny!" - The Shining, 1980
"They're here!" - Poltergeist, 1982
"Is it safe?" - Marathon Man, 1976
"Wait a minute, wait a minute. You ain't heard nothin' yet!" - The Jazz Singer, 1927
"No wire hangers, ever!" - Mommie Dearest, 1981
"Mother of mercy, is this the end of Rico?" - Little Caesar, 1930
"Forget it, Jake, it's Chinatown." - Chinatown, 1974
"I have always depended on the kindness of strangers." - A Streetcar Named Desire, 1951
"Hasta la vista, baby." - Terminator 2: Judgment Day, 1991
"Soylent Green is people!" - Soylent Green, 1973
"Open the pod bay doors, HAL." - 2001: A Space Odyssey, 1968
"Yo, Adrian!" - Rocky II, 1979
"Hello, gorgeous." - Funny Girl, 1968
"Toga! Toga!" - National Lampoon's Animal House, 1978
"Listen to them. Children of the night. What music they make." - Dracula, 1931
"Oh, no, it wasn't the airplanes. It was Beauty killed the Beast." - King Kong, 1933
"My precious." - The Lord of the Rings: Two Towers, 2002
"Attica! Attica!" - Dog Day Afternoon, 1975
"Sawyer, you're going out a youngster, but you've got to come back a star!" - 42nd Street, 1933
"Listen to me, mister. You're my knight in shining armor. Don't you forget it. You're going to get back on that horse, and I'm going to be right behind you, holding on tight, and away we're gonna go, go, go!" - On Golden Pond, 1981
"Tell 'em to go out there with all they got and win just one for the Gipper." - Knute Rockne All American, 1940
"A martini. Shaken, not stirred." - Goldfinger, 1964
"Who's on first." - The Naughty Nineties, 1945
"Cinderella story. Outta nowhere. A former greenskeeper, now, about to become the Masters champion. It looks like a mirac...It's in the hole! It's in the hole! It's in the hole!" - Caddyshack, 1980
"Life is a banquet, and most poor suckers are starving to death!" - Auntie Mame, 1958
"I feel the need - the need for speed!" - Top Gun, 1986
"Carpe diem. Seize the day, boys. Make your lives extraordinary." - Dead Poets Society, 1989.
"Snap out of it!" - Moonstruck, 1987
"My mother thanks you. My father thanks you. My sister thanks you. And I thank you." - Yankee Doodle Dandy, 1942
"Nobody puts Baby in a corner." - Dirty Dancing, 1987
"I'll get you, my pretty, and your little dog, too!" - The Wizard of Oz, 1939
"I'm king of the world!" - Titanic, 1997
`
  .split("\n")
  .slice(1, -1);

function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

export const Various = () => {
  const toast = useToast();
  return (
    <Button.Group isVertical>
      <Button onClick={() => toast({ message: getRandomQuote() })}>
        Normal toast
      </Button>
      <Button
        onClick={() => toast({ message: getRandomQuote(), isOutline: true })}
      >
        Outline toast
      </Button>
      <Button
        onClick={() => toast({ message: getRandomQuote(), canDismiss: true })}
      >
        Dismissable toast
      </Button>
      <Button
        onClick={() =>
          toast({
            message: getRandomQuote(),
            isOutline: true,
            canDismiss: true,
          })
        }
      >
        Dismissable outline toast
      </Button>
      <Button
        onClick={() =>
          toast({
            message: getRandomQuote(),
            canDismiss: true,
            isPersistent: true,
          })
        }
      >
        Persistent toast
      </Button>
    </Button.Group>
  );
};
