<template>
  <div>
    <table border="1" width="700" style="border-collapse: collapse">
      <tbody>
        <tr>
          <td><input type="checkbox" name="" id="" /></td>
          <td>{{ name }}</td>
          <td>{{ price }}</td>
          <td>
            <button>-</button>
            {{ count }}
            <button>+</button>
          </td>
          <td>{{ allPrice }}</td>
          <td><button>删除</button></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>合计:</td>
          <td colspan="5">{{ total }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  props: []
}
</script>

<style></style>
