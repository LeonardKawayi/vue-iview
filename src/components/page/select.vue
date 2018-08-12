<style scoped>
  .select {
    width: 50%;
  }
  .select-city-two {
    margin-top: 10px;
  }

  .multiple-select-city {
    margin-top: 10px;
  }

  .disable-select {
    margin-top: 10px;
  }

  .filterable-select {
    margin-top: 10px;
  }

  .remote-select {
    margin-top: 10px;
  }

  .nomal-select {
    font-size: 15px;
    margin-bottom: 8px;
  }

  .select-size {
    font-size: 15px;
    margin-top: 10px;
  }

  .multiple-select {
    font-size: 15px;
    margin-top: 10px;
  }

  .disable {
    font-size: 15px;
    margin-top: 10px;
  }

  .filterable {
    font-size: 15px;
    margin-top: 10px;
  }

  .remote {
    font-size: 15px;
    margin-top: 10px;
  }

</style>
<template>
  <div class="select">
    <ul class="nomal-select">
      <span>普通选择器:</span>
    </ul>
    <ul class="select-city-one">
      <Select v-model="model1" style="width:200px" placeholder="选择城市">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </ul>
    <ul class="select-size">
      <span>size属性</span>
    </ul>
    <ul class="select-city-two">
      <Select v-model="model2" size="small" style="width:100px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      <Select v-model="model3" style="width:100px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      <Select v-model="model4" size="large" style="width:100px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </ul>

    <ul class="multiple-select">
      <span>多选</span>
    </ul>
    <ul class="multiple-select-city">
      <Select v-model="model5" multiple style="width:260px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </ul>
    <ul class="disable">
      <span>disable属性</span>
    </ul>
    <ul class="disable-select">
      <Select v-model="model6" disabled style="width:200px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      <Select v-model="model7" style="width:200px">
        <Option value="beijing">New York</Option>
        <Option value="shanghai" disabled>London</Option>
        <Option value="shenzhen">Sydney</Option>
      </Select>
    </ul>
    <ul class="filterable">
      <span>可搜索</span>
    </ul>
    <ul class="filterable-select">
      <Row>
        <Col span="12" style="padding-right:10px">
        <Select v-model="model8" filterable>
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        </Col>
        <Col span="12">
        <Select v-model="model9" filterable multiple>
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        </Col>
      </Row>
    </ul>
    <ul class="remote">
      <span>远程搜索</span>
    </ul>
    <ul class="remote-select">
      <Row>
        <Col span="12" style="padding-right:10px">
        <Select
          v-model="model10"
          filterable
          remote
          :remote-method="remoteMethod1"
          :loading="loading1">
          <Option v-for="(option, index) in options1" :value="option.value" :key="index">{{option.label}}</Option>
        </Select>
        </Col>
        <Col span="12">
        <Select
          v-model="model11"
          multiple
          filterable
          remote
          :remote-method="remoteMethod2"
          :loading="loading2">
          <Option v-for="(option, index) in options2" :value="option.value" :key="index">{{option.label}}</Option>
        </Select>
        </Col>
      </Row>
    </ul>
  </div>

</template>

<script>

  export default {
    data() {
      return {
        cityList: [
          {
            value: 'New York',
            label: 'New York'
          },
          {
            value: 'London',
            label: 'London'
          },
          {
            value: 'Sydney',
            label: 'Sydney'
          },
          {
            value: 'Ottawa',
            label: 'Ottawa'
          },
          {
            value: 'Paris',
            label: 'Paris'
          },
          {
            value: 'Canberra',
            label: 'Canberra'
          }
        ],
        model1: '',
        model2: '',
        model3: '',
        model4: '',
        model5: '',
        model6: '',
        model7: '',
        model8: '',
        model9: '',
        model10: '',
        loading1: false,
        options1: [],
        model11: [],
        loading2: false,
        options2: [],
        list: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming']
      }
    },
    methods: {
      remoteMethod1 (query) {
        if (query !== '') {
          this.loading1 = true;
          setTimeout(() => {
            this.loading1 = false;
            const list = this.list.map(item => {
              return {
                value: item,
                label: item
              };
            });
            this.options1 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
          }, 200);
        } else {
          this.options1 = [];
        }
      },
      remoteMethod2 (query) {
        if (query !== '') {
          this.loading2 = true;
          setTimeout(() => {
            this.loading2 = false;
            const list = this.list.map(item => {
              return {
                value: item,
                label: item
              };
            });
            this.options2 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
          }, 200);
        } else {
          this.options2 = [];
        }
      }
    }
  }
</script>



