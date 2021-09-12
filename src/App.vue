<template>
  <h1 class="label-title">Cálculo do IMC</h1>

  <h2 class="label-subtitle">Digite seu peso e altura para calcular o IMC</h2>

  <div class="form-inputs">
    <span class="p-float-label">
      <InputText id="input-weight" type="text" v-model="weight" :disabled='imc'/>
      <label for="input-weight">Peso</label>
    </span>

    <span class="p-float-label">
      <InputText id="input-weight" type="text" v-model="height" :disabled='imc'/>
      <label for="input-weight">Altura</label>
    </span>
  </div>

  <div v-if="!imc">
    <Button class="btn-calc" label="Calcular" @click="calculate" />
    <Button label="Limpar" @click="clear" />
  </div>

  <div v-if="imc">
    <p class="label-size">
      Seu IMC é: <b>{{ imc }}</b>
    </p>
    <p>A classificação do seu IMC é: <b>{{classification}}</b></p>

    <Button label="Calcular novamente" @click="clear" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: null,
      weight: null,
      imc: null,
      classification: "",
    };
  },
  methods: {
    calculate() {
      this.imc = (this.weight / (this.height * this.height)).toFixed(2);

      if (this.imc < 18.5) {
        this.classification = "Magreza";
      } else if (this.imc >= 18.5 && this.imc < 25) {
        this.classification = "Normal";
      } else if (this.imc >= 25 && this.imc < 30) {
        this.classification = "Sobrepeso";
      } else if (this.imc >= 30 && this.imc < 40) {
        this.classification = "Obesidade";
      } else {
        this.classification = "Obesidade grave";
      }
    },
    clear() {
      this.weight = null;
      this.height = null;
      this.imc = null;
      this.classification = '';
    }
  },
};
</script>

<style scopped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.label-title {
  font-size: 2rem;
}

.label-subtitle {
  font-size: 1.1rem;
}

.form-inputs {
  margin: 50px 0 25px;
  display: flex;
  flex-flow: row nowrap;
  gap: 16px;
}

.label-size {
  font-size: 1.125rem;
}

.btn-calc {
  margin-right: 10px;
}
</style>
