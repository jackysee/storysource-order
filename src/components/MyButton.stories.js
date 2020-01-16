export default { title: "MyButton" };

import MyButton from "./MyButton.vue";

export const button = () => ({
  components: { MyButton },
  template: `<MyButton>Hi</MyButton>`
});

import Icon from "./Icon.vue";
export const WithIcon = () => ({
  components: { MyButton, Icon },
  template: `<MyButton><Icon/>Hello</MyButton>`
});
