
                
const source   = $("#entry-template").html();
// selecionamos el id y todo su html
const template = Handlebars.compile(source);
// compilamos el template

const personas = [
				{'name': 'kesly',  'apellido':'martinez', 'edad': 25, 'email': 'kesly@gmail.com'},
				{'name': 'nadia',  'apellido':'morales', 'edad': 25, 'email': 'nadia@gmail.com'},
				{'name': 'visaka',  'apellido':'devi', 'edad': 25, 'email': 'visidevi@gmail.com'},


                ];

let html = template({'persona':personas});
//  en que parte queremos pintar 
$('#objCompile').html(html);
