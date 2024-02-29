# Questions

1. what is CDN
2. what is crossorigin
3. what is React
4. what is JSX
5. what is NPM
   => npm is everything but its does not stand for node package manager
6. what is bundler
   => webpack, parcel, vite (bundler name)

7. there are 2 type of dependencies:
   => normal dependency - it is required for in a production phase
   => dev dependency - it is required for in a development phase

8. dependencies: ~ major updated / ^ minor update on dependencies

9. browserslist:
   => https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z

10. what is JSX
    => jsx is html/xlm like syntax

11. JSX transpile before it reaches the JS -> PARCEL -> Babel(transpile jsx to JS)

12. what is Babel
    => Babel is a Javascript Compiler
    https://babeljs.io/

13. react to web ReactElement compile process:
    React.createElement => ReactElement -js Object => HTMLElement(render)
    JSX => React.createElement => ReactElement -js Object => HTMLElement(render)

14. React Components:
    class base components - old
    functional components - new

15. what is component composition
    => composing a component one another

# issus solved:

1. Error: Expected content key de1e4a02ec63c4eb to exist:
   => remove '.parcel-cache' folder from your project
   https://stackoverflow.com/questions/77166144/error-expected-content-key-de1e4a02ec63c4eb-to-exist-getting-this-error-in-reac
