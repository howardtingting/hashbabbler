cmd_Release/obj.target/sha1cc.node := g++ -shared -pthread -rdynamic -m64  -Wl,-soname=sha1cc.node -o Release/obj.target/sha1cc.node -Wl,--start-group Release/obj.target/sha1cc/addons/sha1.o Release/obj.target/sha1cc/cpp_srcs/sha1.o -Wl,--end-group -lnode