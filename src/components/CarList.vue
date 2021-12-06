<template>
    <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table v-if="cars" class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
                <tr>
                <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Model
                </th>
                <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Manufacturer
                </th>
                <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Year
                </th>
                <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stock Level
                </th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="(car, index) in cars" :key="index">
                <td class="px-6 py-4 whitespace-nowrap">
                    
                    <div class="ml-4">
                        <div class="text-sm text-center font-medium text-gray-900">
                        {{car.model}}
                        </div>
                    </div>
                    
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-center text-gray-900">{{car.manufacturer}}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs text-center leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {{car.year}}
                    </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                    {{car.stock_level}}
                </td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
    </div>
    </div>
</template>    

<script>


export default {
    data() {
        return {
            cars: null
        }
    },
    beforeMount() {
        this.axios.get('/api/car-stocks').then(response => {
            this.cars=response.data.data
        });
    }
}
</script>