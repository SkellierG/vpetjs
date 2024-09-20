import blessed from 'blessed';

const { screen, box } = blessed;

const mainScreen = screen({
  smartCSR: true
})

const mainBox = box({
  top: "center",
  left: "center",
  width: '50%',
  height: '50%',
  content: "hello world",
  tags: true,
  border: {
    type: "line"
  },
  style: {
    fg: 'white',
    bg: 'magenta',
    border: {
      fg: '#f0f0f0'
    },
    hover: {
      bg: 'green'
    }
  }
})

mainScreen.append(mainBox);

let counter: number = 0;

mainBox.on("click", ()=>{
  counter++
  mainBox.setContent(`contador: ${counter}`)
  mainScreen.render()
})

mainScreen.key(['escape', 'q', 'C-c'], (ch: any, key: any) => {
  return process.exit(0);
});

mainBox.focus();

mainScreen.render();
