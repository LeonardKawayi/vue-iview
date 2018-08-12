<style scoped>
  .date-picker {
    width: 50%;
  }

  .nomal {
    font-size: 15px;
    margin-top: 10px;
  }

  .nomal-select {
    margin-top: 10px;
  }

</style>
<template>
  <div class="date-picker">
    <ul class="nomal">
      <span>基础日期选择器</span>
    </ul>
    <ul class="nomal-select">
      <Row>
        <Col span="12">
        <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
        <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
      </Row>
    </ul>
    <ul class="nomal">
      <span>快捷方式</span>
    </ul>
    <ul class="nomal-select">
      <Row>
        <Col span="12">
        <DatePicker type="date" :options="options1" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
        <DatePicker type="daterange" :options="options2" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
      </Row>
    </ul>
    <ul class="nomal">
      <span>面板不联动</span>
    </ul>
    <ul class="nomal-select">
      <DatePicker type="daterange" split-panels placeholder="Select date" style="width: 200px"></DatePicker>
    </ul>
    <ul class="nomal">
      <span>多选</span>
    </ul>
    <ul class="nomal-select">
      <DatePicker type="date" multiple placeholder="Select date" style="width: 300px"></DatePicker>
    </ul>
    <ul class="nomal">
      <span>显示星期数</span>
    </ul>
    <ul class="nomal-select">
      <Row>
        <Col span="12">
        <DatePicker type="date" show-week-numbers placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
        <DatePicker type="daterange" show-week-numbers placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
      </Row>
    </ul>
    <ul class="nomal">
    <span>起始日期</span>
  </ul>
    <ul class="nomal-select">
      <Row>
        <Col span="12">
        <DatePicker type="date" :start-date="new Date(1991, 4, 14)" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
        <DatePicker type="daterange" :start-date="new Date(1991, 4, 14)" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
      </Row>
    </ul>
    <ul class="nomal">
      <span>日期格式</span>
    </ul>
    <ul class="nomal-select">
      <Row>
        <Col span="12">
        <DatePicker :value="value1" format="yyyy年MM月dd日" type="date" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
        <DatePicker :value="value2" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
      </Row>
    </ul>
    <ul class="nomal">
      <span>选择年和月</span>
    </ul>
    <ul class="nomal-select">
      <Row>
        <Col span="12">
         <DatePicker type="year" placeholder="Select year" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
          <DatePicker type="month" placeholder="Select month" style="width: 200px"></DatePicker>
        </Col>
      </Row>
    </ul>
    <ul class="nomal">
      <span>不可选择日期</span>
    </ul>
    <ul class="nomal-select">
      <Row>
        <Col span="12">
          <DatePicker type="date" :options="options3" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
         <DatePicker type="date" :options="options4" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
      </Row>
    </ul>
    <ul class="nomal">
      <span>可以确认</span>
    </ul>
    <ul class="nomal-select">
      <Row>
        <Col span="12">
          <DatePicker type="date" confirm placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
         <DatePicker type="daterange" confirm placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
      </Row>
    </ul>
    <ul class="nomal">
      <span>手动控制组件</span>
    </ul>
    <ul class="nomal-select">
      <DatePicker
        :open="open"
        :value="value3"
        confirm
        type="date"
        @on-change="handleChange"
        @on-clear="handleClear"
        @on-ok="handleOk">
        <a href="javascript:void(0)" @click="handleClick">
          <Icon type="ios-calendar-outline"></Icon>
          <template v-if="value3 === ''">Select date</template>
          <template v-else>{{ value3 }}</template>
        </a>
      </DatePicker>
    </ul>
  </div>

</template>

<script>

  export default {
    data() {
      return {
        open: false,
        value3: '',
        value1: '2016-01-01',
        value2: ['2016-01-01', '2016-02-15'],
        options1: {
          shortcuts: [
            {
              text: 'Today',
              value () {
                return new Date();
              },
              onClick: (picker) => {
                this.$Message.info('Click today');
              }
            },
            {
              text: 'Yesterday',
              value () {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24);
                return date;
              },
              onClick: (picker) => {
                this.$Message.info('Click yesterday');
              }
            },
            {
              text: 'One week',
              value () {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                return date;
              },
              onClick: (picker) => {
                this.$Message.info('Click a week ago');
              }
            }
          ]
        },
        options2: {
          shortcuts: [
            {
              text: '1 week',
              value () {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                return [start, end];
              }
            },
            {
              text: '1 month',
              value () {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                return [start, end];
              }
            },
            {
              text: '3 months',
              value () {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                return [start, end];
              }
            }
          ]
        },
        options3: {
          disabledDate (date) {
            return date && date.valueOf() < Date.now() - 86400000;
          }
        },
        options4: {
          disabledDate (date) {
            const disabledDay = date.getDate();
            return disabledDay === 15;
          }
        }
      }
    },
    methods: {
      handleClick () {
        this.open = !this.open;
      },
      handleChange (date) {
        this.value3 = date;
      },
      handleClear () {
        this.open = false;
      },
      handleOk () {
        this.open = false;
      }
    }
  }
</script>



