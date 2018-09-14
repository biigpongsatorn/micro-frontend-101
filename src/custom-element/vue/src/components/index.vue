<template>
  <div>
    <div>
      {{ message }}
    </div>
    <table border="1">
      <thead>
        <tr>
          <td>
            <b>Type</b>
          </td>
          <td>
            <b>Value</b>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>String</td>
          <td>{{ str }}</td>
        </tr>
        <tr>
          <td>Number</td>
          <td>{{ num }}</td>
        </tr>
        <tr>
          <td>Boolean</td>
          <td>{{ bool }}</td>
        </tr>
        <tr>
          <td>Object</td>
          <td>{{ obj }}</td>
        </tr>
        <tr>
          <td>Array</td>
          <td>{{ arr }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'vue-data-table',
  data () {
    return {
      message: 'Vue Custom Element'
    }
  },
  props: {
    str: {
      type: String,
      default: 'Hello Vue'
    },
    num: {
      type: Number,
      default: 123
    },
    bool: {
      type: Boolean,
      default: true
    },
    obj: {
      type: Object,
      default: () => {
        return { key: 'value' }
      }
    },
    arr: {
      type: Array,
      default: () => [1, 2, 3]
    }
  }
}
</script>
