'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('cliente','ClienteController.index') //Muestra todos los productos 
Route.get('cliente/:id','ClienteController.show') //Muestra un producto find() -> id
Route.get('cliente/crear','ClienteController.create')  //Crear producto save()
Route.post('cliente/crear','ClienteController.store') //crea un producto save()
Route.get('cliente/editar/:id','ClienteController.edit') //edita un producto save() ->id
Route.post('cliente/editar/:id','ClienteController.update') //edita un producto save() ->id
Route.get('cliente/eliminar/:id','ClienteController.destroy') //eliminar un producto delete() ->id

Route.get('vehiculo','VehiculoController.index') //Muestra todos los productos 
//Route.get('vehiculo/:id','VehiculoController.show') //Muestra un producto find() -> id
Route.get('vehiculo/crear','VehiculoController.create')  //Crear producto save()
Route.post('vehiculo/crear','VehiculoController.store') //crea un producto save()
Route.get('vehiculo/editar/:id','VehiculoController.edit') //edita un producto save() ->id
Route.post('vehiculo/editar/:id','VehiculoController.update') //edita un producto save() ->id
Route.get('vehiculo/eliminar/:id','VehiculoController.destroy') //eliminar un producto delete() ->id

Route.get('factura','FacturaController.index') //Muestra todos los productos 
Route.get('factura/:id','FacturaController.show') //Muestra un producto find() -> id
Route.get('factura/crear','FacturaController.create')  //Crear producto save()
Route.post('factura/crear','FacturaController.store') //crea un producto save()
Route.get('factura/editar/:id','FacturaController.edit') //edita un producto save() ->id
Route.post('factura/editar/:id','FacturaController.update') //edita un producto save() ->id
Route.get('factura/eliminar/:id','FacturaController.destroy') //eliminar un producto delete() ->id

Route.get('mecanicore','MecanicoReController.index') //Muestra todos los productos 
Route.get('mecanicore/:id','MecanicoReController.show') //Muestra un producto find() -> id
Route.get('mecanicore/crear','MecanicoReController.create')  //Crear producto save()
Route.post('mecanicore/crear','MecanicoReController.store') //crea un producto save()
Route.get('mecanicore/editar/:id','MecanicoReController.edit') //edita un producto save() ->id
Route.post('mecanicore/editar/:id','MecanicoReController.update') //edita un producto save() ->id
Route.get('mecanicore/eliminar/:id','MecanicoReController.destroy') //eliminar un producto delete() ->id

Route.get('hojaparte','HojaParteController.index') //Muestra todos los productos 
//Route.get('vehiculo/:id','VehiculoController.show') //Muestra un producto find() -> id
Route.get('hojaparte/crear','HojaParteController.create')  //Crear producto save()
Route.post('hojaparte/crear','HojaParteController.store') //crea un producto save()
Route.get('hojaparte/editar/:id','HojaParteController.edit') //edita un producto save() ->id
Route.post('hojaparte/editar/:id','HojaParteController.update') //edita un producto save() ->id
Route.get('hojaparte/eliminar/:id','HojaParteController.destroy') //eliminar un producto delete() ->id

Route.get('repuesto','RepuestoController.index') //Muestra todos los productos 
//Route.get('vehiculo/:id','VehiculoController.show') //Muestra un producto find() -> id
Route.get('repuesto/crear','RepuestoController.create')  //Crear producto save()
Route.post('repuesto/crear','RepuestoController.store') //crea un producto save()
Route.get('repuesto/editar/:id','RepuestoController.edit') //edita un producto save() ->id
Route.post('repuesto/editar/:id','RepuestoController.update') //edita un producto save() ->id
Route.get('repuesto/eliminar/:id','RepuestoController.destroy') //eliminar un producto delete() ->id

Route.get('mecanicovehiculo','MecanicoVehiculoController.index') //Muestra todos los productos 
//Route.get('vehiculo/:id','VehiculoController.show') //Muestra un producto find() -> id
Route.get('mecanicovehiculo/crear','MecanicoVehiculoController.create')  //Crear producto save()
Route.post('mecanicovehiculo/crear','MecanicoVehiculoController.store') //crea un producto save()
Route.get('mecanicovehiculo/editar/:id','MecanicoVehiculoController.edit') //edita un producto save() ->id
Route.post('mecanicovehiculo/editar/:id','MecanicoVehiculoController.update') //edita un producto save() ->id
Route.get('mecanicovehiculo/eliminar/:id','MecanicoVehiculoController.destroy') //eliminar un producto delete() ->id