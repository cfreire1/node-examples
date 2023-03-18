[
    {
        "endpoint":"/example",
        "status": 200,
        "type":"json",
        "http":"get",
        "response": {"valor":12345}
    },
    {
        "endpoint":"/example/:uuid",
        "status": 200,
        "type":"json",
        "http":"post",
        "response": {"valor":"hola"}
    },
    {
        "endpoint":"/example/del",
        "status": 200,
        "type":"json",
        "http":"delete",
        "response": {"valor":12345}
    },
    {
        "endpoint":"/example/:uuid/request",
        "status": 200,
        "type":"json",
        "http":"put",
        "response": {"valor":12345}
    },
    {
        "endpoint":"/examplexml",
        "status": 200,
        "type":"xml",
        "http":"get",
        "response": "response.xml"
    },
    {
        "endpoint":"/example/:uuid/requestsad",
        "status": 200,
        "type":"json",
        "http":"put",
        "response": {"valor":12345}
    }
]