cmd_Release/keccakcc.node := ln -f "Release/obj.target/keccakcc.node" "Release/keccakcc.node" 2>/dev/null || (rm -rf "Release/keccakcc.node" && cp -af "Release/obj.target/keccakcc.node" "Release/keccakcc.node")